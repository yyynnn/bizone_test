import { createSymbiote } from 'redux-symbiote'

const initialState = 'Враг'

const symbiotes = {
  selected: (state, title) => title
}

export const { actions: titleActions, reducer: title } = createSymbiote(
  initialState,
  symbiotes,
  'title_input'
)
