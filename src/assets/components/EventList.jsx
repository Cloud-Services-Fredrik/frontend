import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'

const EventList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch("https://eventservice-cloudservice-course-dhayazh6atcfg0d6.swedencentral-01.azurewebsites.net/api/Event")

        if (res.ok) {
            const data = await res.json()
            setEvents(data)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div className="event-list">
            {
                events.map(event => (<EventItem key={event.eventName} item={event} />))
            }
        </div>
    )
}

export default EventList