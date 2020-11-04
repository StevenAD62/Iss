import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

class Homepage extends Component{

    componentDidMount() {
        console.log('MOUNTED')
    }

    render () {
        return (
            <Aux>
                <p>Homepage</p>
            </Aux>
        )
    }
}

export default Homepage