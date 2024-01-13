import React from 'react'
import { useSelector } from 'react-redux';
import Cover from '../../../../img/cover.jpg'
import Profile from '../../../../img/profileImg.jpg'
import {Link} from 'react-router-dom'
import './ProfileCard.css'

const ProfileCard = ({location}) => {
    const {user} = useSelector((state)=>state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    
    return (
        <div className="">
            <div className="ProfileImages">
                <img src={user.coverPicture? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg" } alt="" />
                <img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png" } alt="" />
            </div>

            <div className="ProfileName">
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.worksAt? user.worksAt: "Write about yourself"}</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>{user.following.length}</span>
                        <span>Following</span>
                    </div>
                    <div className='vl'></div>
                    <div className="follow">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                
                {location === 'profilePage' && (
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
            {location === 'profilelPage' ? '' : (
                <span>
                    <Link style={{textDecoration: "none", color: "inhereit" }} to={`/profile/${user._id}`}>
                        My Profile
                    </Link>
                </span>
            )}
        </div>
    );
};

export default ProfileCard
