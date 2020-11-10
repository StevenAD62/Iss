import React, { Component, Suspense } from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout'
import Homepage from './containers/Homepage/Homepage'
import Space from './containers/Space/Space'

const Iss = React.lazy(() => import('./containers/ISS/Iss'))

class App extends Component{
  render() {
    return (   
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path="/iss" component={Iss} />
            <Route path="/pictures" component={Space} />
          </Switch>
        </Suspense>
      </Layout>

    );
  }
}

export default App;
