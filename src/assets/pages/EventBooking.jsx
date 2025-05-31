import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EventBooking = () => {
    const { eventName } = useParams()

    const [event, setEvent] = useState([])
    const [formData, setFormData] = useState(
        {
            eventTitle: eventName,
            email: '',
            userName: ''
        })

    useEffect(() => {
        getEvents()
    })

    const getEvents = async () => {
        const res = await fetch(`https://eventservice-cloudservice-course-dhayazh6atcfg0d6.swedencentral-01.azurewebsites.net/api/Event/eventName?eventName=${eventName}`)

        if (res.ok) {
            const data = await res.json()
            setEvent(data)
        }
    }

    const postBooking = async () => {
        const res = await fetch(`https://bookingservice-cloudservice-course-hhctbebperb4ebbz.swedencentral-01.azurewebsites.net/api/Booking/send`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
        if (res.ok) {
            console.log("Booking successful")
        }
        else {
            console.error("Booking failed")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postBooking()
    }

    return (
        <div className="form-page">
            <div className="form-card">
                <div className="form-title">Book Ticket for {event.eventName}</div>
                <form className="form" onSubmit={handleSubmit} noValidate>
                    <div className="form-item">
                        <label>Email</label>
                        <input className="form-input" type="text" name="email" value={formData.email} onChange={handleChange} required></input>
                    </div>
                    <div className="form-item">
                        <label>User Name</label>
                        <input className="form-input" type="text" name="userName" value={formData.userName} onChange={handleChange} required></input>
                    </div>
                    <button className="form-btn" type="submit">Book Event</button>
                </form>
            </div>
        </div>
    )
}

export default EventBooking