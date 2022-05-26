import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../hooks/UserContext'
import './ProfileDetailed.css'

/**
 *
 * @param props
 */
const ProfileDetailed = (props) => {
  const [readOnly, setReadOnly] = useState(true)
  const [image, setImage] = useState(props.user.image)
  const { user, setUser } = useContext(UserContext)
  const { id } = useParams()

  /**
   * Converts a file to base64.
   *
   * @param {object} event The event.
   * @param file
   */
  const getBase64 = async (file) => {
    const reader = new FileReader()

    return new Promise((resolve) => {
      /**
       * Reads the file on load.
       *
       * @param {object} event the event.
       */
      reader.onload = (event) => {
        resolve(event.target.result)
      }
      reader.readAsDataURL(file)
    })
  }

  /**
   * Handles the edit functionality of the profile.
   *
   * @param {object} event The event.
   */
  const handleEdit = (event) => {
    event.preventDefault()
    setReadOnly(false)
  }

  /**
   * Handles the save functionality of the profile.
   *
   * @param {object} event The event.
   */
  const handleSave = async (event) => {
    event.preventDefault()
    setReadOnly(true)

    let imageUrl = props.user.image

    const image = event.target.avatar.files[0]
    if (image) {
      imageUrl = await getBase64(image)
    }

    setImage(imageUrl)
    const tempUser = { ...user }
    tempUser.image = imageUrl
    setUser(tempUser)

    const firstname = event.target.fullname.value.split(' ')[0]
    const lastname = event.target.fullname.value.split(' ')[1]

    try {
      const response = await fetch(
        process.env.REACT_APP_ACCOUNT_API + '/' + 'user/' + id + '/update',
        {
          method: 'PUT',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            firstname: `${firstname}`,
            lastname: `${lastname}`,
            school: `${event.target.school.value}`,
            location: `${event.target.location.value}`,
            description: `${event.target.description.value}`,
            goals: `${event.target.goals.value}`,
            image: `${imageUrl}`,
            programming: [
              `${event.target.pl1.value}`,
              `${event.target.pl2.value}`,
              `${event.target.pl3.value}`,
              `${event.target.pl4.value}`,
              `${event.target.pl5.value}`
            ]
          })
        }
      )
      // const res = await response.json()
      if (response.status === 204) {
        console.log('works')
      } else {
        console.log('failed')
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='profiledcontainer'>
      <form onSubmit={handleSave}>
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
                defaultValue={props.user.programming[0]}
                readOnly={readOnly}
              />
            </div>
            <div>
              <label htmlFor='pl2'>Programming Language #2:</label>
              <input
                name='pl2'
                type='text'
                defaultValue={props.user.programming[1]}
                readOnly={readOnly}
              />
            </div>
            <div>
              <label htmlFor='pl3'>Programming Language #3:</label>
              <input
                name='pl3'
                type='text'
                defaultValue={props.user.programming[2]}
                readOnly={readOnly}
              />
            </div>
            <div>
              <label htmlFor='pl4'>Programming Language #4:</label>
              <input
                name='pl4'
                type='text'
                defaultValue={props.user.programming[3]}
                readOnly={readOnly}
              />
            </div>
            <div>
              <label htmlFor='pl5'>Programming Language #5:</label>
              <input
                name='pl5'
                type='text'
                defaultValue={props.user.programming[4]}
                readOnly={readOnly}
              />
            </div>
          </div>
          <div className='detailedright'>
            <div className='profilepic'>
              {props.user.id === id
                ? (
                <div className='profilepic'>
                  <div>
                    <img src={image} alt='profile pic' />
                    <input type='file' name='avatar' />
                  </div>
                  <button onClick={handleEdit}>Edit</button>
                  <button type='submit'>Save</button>
                </div>
                  )
                : (
                <div className='profilepic'>
                  <img src={image} alt='profile pic' />
                </div>
                  )}
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
      </form>
    </div>
  )
}

export default ProfileDetailed
