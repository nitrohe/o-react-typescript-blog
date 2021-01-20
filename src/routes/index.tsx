/** @format */

import * as React from 'react'
import { Route, Switch, RouteProps } from 'react-router-dom'
import NotFound from '@components/notFound'
import Loading from '@components/loading'

const { lazy, Suspense } = React

const Demo1 = lazy(() => import(/* webpackChunkName:"dashboard" */ '@views/Demo1'))
const About = lazy(() => import(/* webpackChunkName:"demo" */ '@views/About'))

export const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: About
  },
  {
    path: '/demo1',
    exact: true,
    component: Demo1
  }
]

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map(r => {
        const { path, exact, component } = r
        const LazyComponent = component
        return (
          <Route key={path + ''} exact={!!exact} path={path} render={(props: any) => <LazyComponent {...props} />} />
        )
      })}
    </Switch>
  </Suspense>
)

export default Routes
