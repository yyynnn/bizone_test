import { createSymbiote } from 'redux-symbiote'

const initialState = {
  error: null,
  data: [],
  more: [],
  loading: false,
  loadingMore: false,
  stop: false,
  page: 1,
  total_results: null,
  total_pages: null,
  fetched: false
}

const symbiotes = {
  start: state => ({ ...state, loading: true, reset: false }),
  finish: (state, { data, total_results, total_pages }) => ({
    ...state,
    loading: false,
    data,
    total_results,
    total_pages,
    fetched: true
  }),
  more: state => ({ ...state, loadingMore: true, reset: false, page: state.page + 1 }),
  moreFinish: (state, movies) => ({
    ...state,
    loadingMore: false,
    more: state.more.concat(movies)
  }),
  moreReset: (state, movies) => ({
    ...state,
    page: initialState.page,
    stop: initialState.stop,
    more: initialState.more
  }),
  fail: (state, error) => ({ ...state, loading: false, error }),
  stop: (state, stop) => ({ ...state, stop, page: 1 })
}

export const { actions: moviesActions, reducer: movies } = createSymbiote(
  initialState,
  symbiotes,
  'movies'
)

export const { actions: moviesActionsByTitle, reducer: moviesByTitle } = createSymbiote(
  initialState,
  symbiotes,
  'movies_by_title'
)
