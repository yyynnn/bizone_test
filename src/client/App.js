import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { hot } from 'react-hot-loader/root'
import { UIstyles } from 'mtsbankui'

import { RoutesConfig as Routes } from './routes/config'
import { GlobalStyles } from './styles/global'

const theme = {}

export const App = hot(() => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <UIstyles />
        <GlobalStyles />
        <Normalize />
        <Routes />
      </React.Fragment>
    </ThemeProvider>
  )
})
