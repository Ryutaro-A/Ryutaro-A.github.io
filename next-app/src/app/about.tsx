import React from "react"
import Container from '@mui/material/Container';
import Image from 'next/image'
import Profile from "../components/profile"
import Resume from "../components/resume"
import Footer from "../components/footer"



const About = () => {
    return (
    <Container className="mt-10">
        <Profile />
            <Resume />
        <div className="mt-14">
            <Footer />
        </div>
    </Container>
    )
}

export default About