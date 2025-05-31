import React from 'react'
import Nav from '../components/Nav'
import EventList from '../components/EventList'

const PortalLayout = () => {
    return (
        <div className="portal">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
            <Nav />
            <header>
                <div>
                    Events
                </div>
                <div>
                    <img src="/images/Button Icon.png" />
                </div>
            </header>
            <main>
                <EventList />
            </main>
            <footer>
                <div className="flex-row">
                    <div className="copyright-text">Copyright © 2025 Peterdraw</div>
                    <div>Privacy Policy</div>
                    <div>Term and conditions</div>
                    <div>Contact</div>
                </div>
                <div>
                    <img src="/images/Social Media.png" />
                </div>
            </footer>
        </div>
    )
}

export default PortalLayout