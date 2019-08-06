import React from 'react'
import { Spacer, theme, useDidMount, Heading } from 'mtsbankui'
import { useSelector, useDispatch } from 'react-redux'

import { Movies } from '../../molecules/Movies'

import { moviesActions, moviesActionsByTitle } from './reducer'

import { Container, Row, Col } from 'client/features/grid'

export const Cards = () => {
  const dispatch = useDispatch()

  const {
    stop,
    moreMovies,
    movies,
    stopByTitle,
    fetched,
    loading,

    moreMoviesByTitle,
    moviesByTitle,
    fetchedByTitle,
    loadingByTitle,

    title
  } = useSelector(({ movies, moviesByTitle, title }) => {
    return {
      stop: movies.stop,
      moreMovies: movies.more,
      movies: movies.data,
      totalMovies: movies.total_results,
      loading: movies.loading,
      fetched: movies.fetched,

      stopByTitle: moviesByTitle.stop,
      moreMoviesByTitle: moviesByTitle.more,
      moviesByTitle: moviesByTitle.data,
      totalMoviesByTitle: moviesByTitle.total_results,
      fetchedByTitle: moviesByTitle.fetched,
      loadingByTitle: moviesByTitle.loading,

      title
    }
  })

  useDidMount(() => {
    movies.length < 1 && dispatch(moviesActions.start())
    moviesByTitle.length < 1 && dispatch(moviesActionsByTitle.start())
  })

  const loadMoreMovies = () => {
    dispatch(moviesActions.more())
  }

  const loadMoreMoviesByTitle = () => {
    dispatch(moviesActionsByTitle.more())
  }

  return (
    <Container>
      <Row>
        <Col>
          <Movies
            movies={moviesByTitle}
            more={moreMoviesByTitle}
            fetched={fetchedByTitle}
            loading={loadingByTitle}
            onEnter={loadMoreMoviesByTitle}
            stop={stopByTitle}
          />
        </Col>
      </Row>

      {title && stopByTitle && (
        <Row>
          <Col>
            <Spacer space={theme.spacings.m}></Spacer>
            <Heading h={4}>Прочее похожее: </Heading>
            <Spacer space={theme.spacings.m}></Spacer>
          </Col>

          <Col>
            <Movies
              movies={movies}
              more={moreMovies}
              fetched={fetched}
              loading={loading}
              onEnter={loadMoreMovies}
              stop={stop}
            />
          </Col>
        </Row>
      )}

      <Spacer space={theme.spacings.l}></Spacer>
    </Container>
  )
}
