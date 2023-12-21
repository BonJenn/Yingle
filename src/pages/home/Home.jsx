import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide.jsx';

const Home = () => {
    return (
        <div className="Home">
           <ProfileSide/>
            <div className="postSide">Posts</div>
            <div className="profileSide">RightSide</div>
        </div>
    )
}

export default Home
