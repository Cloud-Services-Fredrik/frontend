import './App.css'
import { Routes, Route } from 'react-router-dom'
import PortalLayout from './assets/layouts/PortalLayout'
import EventBooking from './assets/pages/EventBooking'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PortalLayout />} />
                <Route path="/events/:eventName" element={<EventBooking />} />
            </Routes>
        </>
    )
}

export default App
