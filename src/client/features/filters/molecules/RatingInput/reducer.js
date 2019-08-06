import { createSymbiote } from 'redux-symbiote'

const initialState = 3

const symbiotes = {
  selected: (state, stars) => stars
}

export const { actions: ratingActions, reducer: rating } = createSymbiote(
  initialState,
  symbiotes,
  'rating_input'
)
