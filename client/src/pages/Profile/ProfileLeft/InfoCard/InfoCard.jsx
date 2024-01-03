import React, { useState } from 'react'
import './InfoCard.css'
import ProfileModal from '../../../../components/ProfileModal/ProfileModal.jsx'

import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {

        const [modalOpened , setModalOpened] = useState(false)
    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>Your Info</h4>
                <div>
                <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
                </div>
                
            </div>
    
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>in Relationship</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Multan</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Omegle</span>
            </div>

            <button class="button logout-button">Logout</button>
        </div>
    )
}

export default InfoCard