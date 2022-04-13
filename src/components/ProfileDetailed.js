import React, { useState } from 'react'
import './ProfileDetailed.css'

/**
 *
 */
const ProfileDetailed = (props) => {
  const [readOnly, setReadOnly] = useState(true)

  /**
   *
   */
  const handleEdit = () => {
    setReadOnly(false)
  }

  /**
   *
   */
  const handleSave = () => {
    setReadOnly(true)
  }
  return (
    <div className='profiledcontainer'>
      <div className='profiledetailed'>
        <div className='detailedleft'>
          <div>
            <label htmlFor='fullname'>Full Name:</label>
            <input
              name='fullname'
              type='text'
              defaultValue={props.user.firstname + ' ' + props.user.lastname}
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='school'>School:</label>
            <input
              name='school'
              type='text'
              defaultValue={props.user.school}
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='location'>Location:</label>
            <input
              name='location'
              type='text'
              defaultValue={props.user.location}
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl1'>Programming Language #1:</label>
            <input
              name='pl1'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl2'>Programming Language #2:</label>
            <input
              name='pl2'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl3'>Programming Language #3:</label>
            <input
              name='pl3'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl4'>Programming Language #4:</label>
            <input
              name='pl4'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl5'>Programming Language #5:</label>
            <input
              name='pl5'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
        </div>
        <div className='detailedright'>
          <div className='profilepic'>
            <div>
              PICTURE<button>Add picture</button>
            </div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleSave}>Save</button>
          </div>
          <div>
            <label htmlFor='description'>Description:</label>
            <textarea
              name='description'
              type='text'
              defaultValue={props.user.description}
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='goals'>Goals:</label>
            <textarea
              name='goals'
              type='text'
              defaultValue={props.user.goals}
              readOnly={readOnly}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetailed
