import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const PortalLayout = () => {
    return (
        <div className="portal">
            <Nav />
            <header></header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    )
}

export default PortalLayout