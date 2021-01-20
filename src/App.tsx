/** @format */

import * as React from 'react'
import { HashRouter as Router, Routes, Route, Switch } from 'react-router-dom'
//import loadable from '@loadable/component'

import HomeComponent from '@views/Home'
// const HomeComponent = loadable(() => import(/* webpackChunkName: "home" */ /* webpackPreload: true */ './views/Home'))
import NotFoundComponent from '@components/notFound'
//const Demo1Component = loadable(() => import(/* webpackChunkName: "demo1" */ './views/Demo1'))
//const Demo2Component = loadable(() => import(/* webpackChunkName: "demo2" */ './views/Demo2'))

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/404" component={NotFoundComponent}></Route>
            <Route path="/" component={HomeComponent}></Route>
          </Switch>
          {/*<Routes>
           <Route path="/" element={<HomeComponent />}></Route>
            <Route path="/other" element={<OtherComponent />}></Route>
            <Route path="/about" element={<AboutComponent />}></Route>
            <Route path="/chart" element={<ChartComponent />}></Route>
            <Route path="/demo1" element={<Demo1Component />}></Route>
            <Route path="/demo2" element={<Demo2Component />}></Route>
          </Routes>*/}
        </Router>
      </div>
    )
  }
}

export default App
