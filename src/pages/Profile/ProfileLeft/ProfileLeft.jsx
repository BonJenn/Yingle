import React from 'react'
import LogoSearch from './LogoSearch/LogoSearch.jsx'
import InfoCard from './InfoCard/InfoCard.jsx'
import FollowersCard from './FollowersCard/FollowersCard.jsx'
import './ProfileLeft.css'

const ProfileLeft = () => {
    return (
        <div className="ProfileLeft">
            <LogoSearch/>
            <InfoCard/>
            <FollowersCard/>
        </div>
    )
}

export default ProfileLeft