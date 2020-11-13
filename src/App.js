import React, { Component, Suspense } from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout'
import Homepage from './containers/Homepage/Homepage'

const Iss = React.lazy(() => import('./containers/ISS/Iss'))
const Space = React.lazy(() => import('./containers/Space/Space'))
const Rover = React.lazy(() => import('./containers/Rover/Rover'))

class App extends Component{
  render() {
    return (   
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path="/iss" component={Iss} />
            <Route path="/pictures" component={Space} />
            <Route path="/rover" component={Rover} />
          </Switch>
        </Suspense>
      </Layout>

    );
  }
}

export default App;
