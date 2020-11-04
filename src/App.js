import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout'
import Homepage from './containers/Homepage/Homepage'

class App extends Component{
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/' exact component={Homepage} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
