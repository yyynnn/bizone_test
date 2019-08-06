import React from 'react'
import { Route, Switch } from 'react-router'

import { MAIN, DETAILS } from './names'

import { NotFound } from 'client/features/notFound/notFound'
import { Home } from 'client/features/home/pages/Home'
import { DetailPage } from 'client/features/details/pages/DetailPage'

export const RoutesConfig = () => (
  <Switch>
    <Route exact={true} path={'/'} component={Home} />
    <Route exact={true} path={MAIN} component={Home} />
    <Route exact={true} path={DETAILS} component={DetailPage} />
    <Route component={NotFound} />
  </Switch>
)
