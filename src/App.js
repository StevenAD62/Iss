import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout'
import Homepage from './containers/Homepage/Homepage'
import Iss from './containers/ISS/Iss'

class App extends Component{
  render() {
    return (   
      <Layout>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path="/iss" component={Iss} />
        </Switch>
      </Layout>

    );
  }
}

export default App;
