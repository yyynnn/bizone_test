import { applyMiddleware, compose, createStore, Store } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import { createBrowserHistory, createMemoryHistory } from 'history'
import root from 'window-or-global'
import axios from 'axios'

import { createRootReducer } from './rootReducer'
import { rootLogic } from './rootLogic'

const IS_DEV = process.env.NODE_ENV === 'development' ? true : false
const IS_CLIENT = !!+process.env.IS_CLIENT
const deps = { axios }

export const history = IS_CLIENT ? createBrowserHistory() : createMemoryHistory()

export const configureStore = preloadedState => {
  const logicMiddleware = createLogicMiddleware(rootLogic, deps)
  const createEnhancer = () => {
    const composeEnhancers =
      IS_CLIENT && IS_DEV ? root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose

    return composeEnhancers(applyMiddleware(logicMiddleware))
  }

  const enhancer = createEnhancer()
  const store = createStore(createRootReducer(), preloadedState, enhancer)
  store.logicMiddleware = logicMiddleware

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(createRootReducer())
    })
  }
  // check store
  root.store = store

  return store
}
