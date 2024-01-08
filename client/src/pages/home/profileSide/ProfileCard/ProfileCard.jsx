import React from 'react'
import { useSelector } from 'react-redux';
import Cover from '../../../../img/cover.jpg'
import Profile from '../../../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    const {user} = useSelector((state)=>state.authReducer.authData)

    const ProfilePage = false;
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="">
            <div className="ProfileImages">
                <img src={user.coverPicture? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg" } alt="" />
                <img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png" } alt="" />
            </div>

            <div className="ProfileName">
                <span>Zendaya MJ</span>
                <span>Senior UI/UX Designer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,8900</span>
                        <span>Followings</span>
                    </div>
                    <div className='vl'></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                
                {ProfilePage && (
                    <>
                    <div className="vl">

                    </div>
                    <div className="follow">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                 
                    </> 
                    
                )}

                </div>
                <hr />
            </div>
            {ProfilePage? '': <span>My Profile</span> }

           
        </div>
    )
}

export default ProfileCard
