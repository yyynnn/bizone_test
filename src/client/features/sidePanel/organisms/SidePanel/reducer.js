import { createSymbiote } from 'redux-symbiote'

const initialState = {
  error: null,
  data: {},
  credits: {},
  loading: false,
  loadingCredits: false,
  open: false,
  movieId: null
}

const symbiotes = {
  start: (state, id) => ({
    ...state,
    loading: true,
    loadingCredits: true,
    movieId: id,
    open: true
  }),
  fail: (state, error) => ({ ...state, loading: false, error }),
  finish: (state, data) => ({ ...state, loading: false, data }),
  credits: (state, credits) => ({ ...state, loadingCredits: false, credits }),
  close: state => ({ ...state, open: false, data: {}, credits: {} })
}

export const { actions: sidePanelActions, reducer: sidePanel } = createSymbiote(
  initialState,
  symbiotes,
  'side_panel'
)
