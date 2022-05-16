import React, { useEffect, useState } from 'react'
import ProfileDetailed from './ProfileDetailed'
import './ProfileSummary.css'

/**
 *
 * @param props
 */
const ProfileSummary = (props) => {
  const [summary, setSummary] = useState(true)

  // Sets summary to true and shows the summary when the state of parent changes.
  // Parent state changes when the "connect button is clicked, makes the next user shown in summarized profile"
  useEffect(() => {
    setSummary(true)
  }, [props.connectState])

  // Two conditionals, if not undefined show user, if undefined show "message" > No more users to match with.
  // Nested conditional checks if the state is summary or detailed and renders accordingly.
  return (
    <div>
      {props.user !== undefined
        ? (
        <div className='profilesummarycontainer'>
          {summary
            ? (
            <>
              <div className='profilesummarypicture'>
                <img src={props.user.image} alt='profile picture' />
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
              <button onClick={() => setSummary(false)}>View More</button>
            </>
              )
            : (
            <ProfileDetailed user={props.user} />
              )}
        </div>
          )
        : (
          <div className='loaderContainer'>
            <div className='loaderHeader' >No more users available at the moment</div>
            <div className='loader'></div>
         </div>
          )}
    </div>
  )
}

export default ProfileSummary
