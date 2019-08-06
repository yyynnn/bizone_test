import { createLogic } from 'redux-logic'

import { genresActions } from './reducer'

import { API_GENRES } from 'client/constants'

export const genresLogic = createLogic({
  type: genresActions.start().type,
  latest: true,
  debounce: 200,
  process({ action, axios }, dispatch, done) {
    axios
      .get(API_GENRES)
      .then(({ data }) => {
        dispatch(genresActions.finish(data.genres))
      })
      .catch(function(error) {
        dispatch(genresActions.fail(error))
      })
      .finally(function() {
        done()
      })
  }
})
