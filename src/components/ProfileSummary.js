import React from 'react'
import './ProfileSummary.css'

/**
 *
 * @param props
 */
const ProfileSummary = (props) => {
  return (
    <div className='profilesummarycontainer'>
        <div className='profilesummarypicture'>
            <img src={props.user.image} alt='profile picture'/>
            <h3>{props.user.firstname + ' ' + props.user.lastname}</h3>
        </div>
        <div className='profilesummarylangs'>
            <p>#1. {props.user.programming[0]}</p>
            <p>#2. {props.user.programming[1]}</p>
            <p>#3. {props.user.programming[2]}</p>
            <p>#4. {props.user.programming[3]}</p>
        </div>
        <div className='profilesummaryinfo'>
            <p>{props.user.school}</p>
            <p>{props.user.location}</p>
        </div>
        <div className='profilesummarydesc'>
            <p>{props.user.description}</p>
        </div>
        <button type='submit'>View More</button>
    </div>
  )
}

export default ProfileSummary
