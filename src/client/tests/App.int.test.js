import React from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { configureStore } from 'client/store'
import { App } from 'client/App'
import { DETAILS, MAIN } from 'client/routes/names'

const store = configureStore({})

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    history
  }
}

describe('Home page', () => {
  it('Not broken!', () => {
    const { getByTestId } = renderWithRouter(<App />, {
      route: MAIN
    })
    expect(getByTestId('home_page')).toBeVisible()
  })
})

describe('Detail page', () => {
  it('Not broken!', () => {
    const { getByTestId } = renderWithRouter(<App />, {
      route: DETAILS
    })
    expect(getByTestId('details_page')).toBeVisible()
  })
})

describe('Landing on a 404 page', () => {
  it('Not broken!', () => {
    const { getByTestId } = renderWithRouter(<App />, {
      route: '/something-that-does-not-match'
    })
    // normally I'd use a data-testid, but just wanted to show this is also possible
    expect(getByTestId('not_found_page')).toBeVisible()
  })
})
