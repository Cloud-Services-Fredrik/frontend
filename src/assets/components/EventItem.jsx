import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({ item }) => {
    return (
        <Link to={`/events/${item.eventName}`} className="event-card">
            <div className="event-time">{item.time}</div>
            <div className="event-name">{item.eventName}</div>
            <div className="event-place">{item.location}</div>
            <div className="event-price">${item.price}</div>
        </Link>
    )
}

export default EventItem