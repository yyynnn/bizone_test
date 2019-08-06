import { createSymbiote } from 'redux-symbiote'

const initialState = 2013

const symbiotes = {
  selected: (state, year) => year
}

export const { actions: yearActions, reducer: year } = createSymbiote(
  initialState,
  symbiotes,
  'year_input'
)
