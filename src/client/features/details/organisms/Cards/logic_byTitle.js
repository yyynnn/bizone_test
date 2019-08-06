import { createLogic } from 'redux-logic'

import { moviesActions, moviesActionsByTitle } from './reducer'

import { API_KEY, API_SEARCH, API_DISCOVER } from 'client/constants'

export const moviesByTitleLogic = createLogic({
  type: moviesActionsByTitle.start().type,
  latest: true,
  debounce: 300,
  process({ axios, getState }, dispatch, done) {
    const { year, title, rating, genres } = getState()
    axios({
      url: title ? API_SEARCH : API_DISCOVER,
      method: 'get',
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
        primary_release_year: year,
        with_genres: genres.id === 0 ? '' : genres.id,
        query: title,
        'vote_average.gte': rating
      }
    })
      .then(({ data }) => {
        const filtered = data.results.filter(movie => {
          return movie.vote_average >= rating && genres.id === 0
            ? true
            : movie.genre_ids.includes(genres.id)
        })
        dispatch(
          moviesActionsByTitle.finish({
            data: filtered,
            total_results: data.total_results,
            total_pages: data.total_pages
          })
        )
        dispatch(moviesActionsByTitle.moreReset())
      })
      .catch(error => {
        dispatch(moviesActionsByTitle.fail(error))
      })
      .finally(() => {
        done()
      })
  }
})

export const moreMoviesByTitleLogic = createLogic({
  type: moviesActionsByTitle.more().type,
  latest: true,
  debounce: 300,
  process({ axios, action, getState }, dispatch, done) {
    const { year, moviesByTitle, title, rating, genres } = getState()
    const page = moviesByTitle.page
    const stop = page >= moviesByTitle.total_pages

    const request = () => {
      axios({
        url: title ? API_SEARCH : API_DISCOVER,
        method: 'get',
        params: {
          api_key: API_KEY,
          language: 'ru-RU',
          primary_release_year: year,
          with_genres: genres.id === 0 ? '' : genres.id,
          query: title,
          page,
          'vote_average.gte': rating
        }
      })
        .then(({ data }) => {
          const filtered = data.results.filter(movie => {
            return movie.vote_average >= rating && genres.id === 0
              ? true
              : movie.genre_ids.includes(genres.id)
          })
          dispatch(moviesActionsByTitle.moreFinish(filtered))
        })
        .catch(error => {
          dispatch(moviesActionsByTitle.fail(error))
        })
        .finally(() => {
          done()
        })
    }

    stop ? dispatch(moviesActionsByTitle.stop(stop)) && done() : request()
  }
})
