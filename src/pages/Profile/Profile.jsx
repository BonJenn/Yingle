import React from 'react'
import PostSide from '../home/PostSide/PostSide.jsx'
import ProfileCard from '../home/profileSide/ProfileCard/ProfileCard.jsx'

import ProfileLeft from './ProfileLeft/ProfileLeft'
import './Profile.css'

const Profile = () => {
    return (
        <div className="Profile">
            <ProfileLeft/>

            <div className="Profile-Center">
                <ProfileCard/>
                <PostSide/>
            </div>
        </div>
    )
}

export default Profile