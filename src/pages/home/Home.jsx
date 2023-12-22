import React from 'react'
import PostSide from '../../components/PostSide/PostSide.jsx'
import ProfileSide from '../../components/profileSide/ProfileSide.jsx'
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <div className="profileSide">RightSide</div>

        </div>
    )
}

export default Home
