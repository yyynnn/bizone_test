import { createSymbiote } from 'redux-symbiote'

const initialState = {
  error: null,
  data: [],
  loading: false,
  id: 0,
  needToFetch: true
}

const symbiotes = {
  start: state => ({ ...state, loading: true }),
  fail: (state, error) => ({ ...state, loading: false, error }),
  finish: (state, genres) => ({ ...state, loading: false, data: genres, needToFetch: false }),
  selected: (state, id) => ({ ...state, loading: false, id })
}

export const { actions: genresActions, reducer: genres } = createSymbiote(
  initialState,
  symbiotes,
  'genre_input'
)
