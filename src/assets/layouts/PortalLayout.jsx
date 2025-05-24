import React from 'react'
import Nav from '../components/Nav'

const PortalLayout = () => {
    return (
        <div className="portal">
            <Nav />
            <header>
                <div>
                    Events
                </div>
                <div>
                    <img src="../src/assets/images/Button Icon.png" />
                </div>
            </header>
            <main>
                <button className="event-card">
                    <div className="event-time">Jun 13</div>
                    <div className="event-name">Event name</div>
                    <div className="event-place">my home</div>
                </button>
            </main>
            <footer>
                <div className="flex-row">
                    <div className="copyright-text">Copyright © 2025 Peterdraw</div>
                    <div>Privacy Policy</div>
                    <div>Term and conditions</div>
                    <div>Contact</div>
                </div>
                <div>
                    <img src="../src/assets/images/Social Media.png"/>
                </div>
            </footer>
        </div>
    )
}

export default PortalLayout