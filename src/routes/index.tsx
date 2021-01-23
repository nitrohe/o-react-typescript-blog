/** @format */

import * as React from 'react'
import { Route, Switch, RouteProps } from 'react-router-dom'
import NotFound from '@components/notFound'
import Loading from '@components/loading'

const { lazy, Suspense } = React

const About = lazy(() => import(/* webpackChunkName:"About" */ '@views/About'))
const Article = lazy(() => import(/* webpackChunkName:"Article" */ '@views/Article'))

export const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: About
  },
  {
    path: '/article',
    exact: true,
    component: Article
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
