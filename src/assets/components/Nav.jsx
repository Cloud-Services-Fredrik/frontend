import React from 'react'

const Nav = () => {
    return (
        <nav>
            <div>
                <img src="./src/assets/images/Logo.png" />
            </div>
            <div className="flex-row nav-content">
                <div>
                    <img src="./src/assets/images/Ticket.png" />
                </div>
                <div className="nav-text">Events</div>
            </div>
        </nav>
    )
}

export default Nav