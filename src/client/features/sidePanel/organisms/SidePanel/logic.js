import { createLogic } from 'redux-logic'

import { sidePanelActions } from './reducer'

import { API_KEY, API_MOVIE } from 'client/constants'

export const sidePanelLogic = createLogic({
  type: sidePanelActions.start().type,
  process({ action, axios }, dispatch, done) {
    const movie_id = action.payload

    axios
      .all([
        axios({
          url: `${API_MOVIE}/${movie_id}`,
          method: 'get',
          params: {
            api_key: API_KEY,
            language: 'ru-RU'
          }
        })
          .then(({ data }) => {
            dispatch(sidePanelActions.finish(data))
          })
          .catch(error => {
            dispatch(sidePanelActions.fail(error))
          }),
        axios({
          url: `${API_MOVIE}/${movie_id}/credits`,
          method: 'get',
          params: {
            api_key: API_KEY,
            language: 'ru-RU'
          }
        })
          .then(({ data }) => {
            dispatch(sidePanelActions.credits(data))
          })
          .catch(error => {
            dispatch(sidePanelActions.fail(error))
          })
      ])
      .then(
        axios.spread((acct, perms) => {
          done()
        })
      )
  }
})
