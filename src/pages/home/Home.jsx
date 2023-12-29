import React from 'react'
import PostSide from './PostSide/PostSide.jsx'
import ProfileSide from './profileSide/ProfileSide.jsx'
import RightSide from './RightSide/RightSide.jsx'
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <RightSide/>

        </div>
    )
}

export default Home
