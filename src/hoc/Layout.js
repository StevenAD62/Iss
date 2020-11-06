import React from 'react'
import Aux from './Aux'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'
import './Layout.css'

const Layout = (props) => (
    <Aux>
        <div className="layout">
            <div className="toolbar">
                <Toolbar />
            </div>
            <div className="children">
                {props.children}
            </div>
            <div className="toolbar">
                <Toolbar />
            </div>
        </div>
    </Aux>
    
)

export default Layout