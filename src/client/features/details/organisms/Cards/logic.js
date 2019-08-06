import { createLogic } from 'redux-logic'

import { moviesActions } from './reducer'

import { API_KEY, API_DISCOVER } from 'client/constants'

export const moviesLogic = createLogic({
  type: moviesActions.start().type,
  latest: true,
  debounce: 300,
  process({ axios, getState }, dispatch, done) {
    const { rating, year, genres } = getState()
    axios({
      url: API_DISCOVER,
      method: 'get',
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
        with_genres: genres.id === 0 ? '' : genres.id,
        primary_release_year: year || 2019,
        'vote_average.gte': rating,
        sort_by: year ? 'popularity.desc' : 'release_date.desc'
      }
    })
      .then(({ data }) => {
        dispatch(
          moviesActions.finish({
            data: data.results,
            total_results: data.total_results,
            total_pages: data.total_pages
          })
        )
        dispatch(moviesActions.moreReset())
      })
      .catch(error => {
        dispatch(moviesActions.fail(error))
      })
      .finally(() => {
        done()
      })
  }
})

export const moreMoviesLogic = createLogic({
  type: moviesActions.more().type,
  latest: true,
  debounce: 300,
  process({ axios, action, getState }, dispatch, done) {
    const { rating, year, genres, movies } = getState()
    const page = movies.page
    const stop = page >= movies.total_pages

    const request = () => {
      axios({
        url: API_DISCOVER,
        method: 'get',
        params: {
          api_key: API_KEY,
          language: 'ru-RU',
          with_genres: genres.id === 0 ? '' : genres.id,
          primary_release_year: year,
          'vote_average.gte': rating,
          sort_by: 'release_date.desc',
          page
        }
      })
        .then(({ data }) => {
          const stop = page >= data.total_pages
          dispatch(moviesActions.moreFinish(data.results))
          stop && dispatch(moviesActions.stop(stop))
        })
        .catch(error => {
          dispatch(moviesActions.fail(error))
        })
        .finally(() => {
          done()
        })
    }

    stop ? dispatch(moviesActions.stop(stop)) && done() : request()
  }
})
