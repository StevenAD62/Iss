import React from 'react'
import Aux from './Aux'
import Toolbar from '../components/Navigation/Toolbar'

const Layout = (props) => (
    <Aux>
        <Toolbar />
        {props.children}
    </Aux>
    
)

export default Layout