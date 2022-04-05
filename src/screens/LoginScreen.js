import React from 'react'

const LoginScreen = () => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        const response = await fetch(process.env.REACT_APP_ACCOUNT_API + '/login', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': `${event.target.username.value}`,
                'password': `${event.target.password.value}`
            })
        })
        const res = await response.json()
        console.log(await res)
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <div className='form' onSubmit={handleSubmit}>
        <form>
            <div className='inputcontainer'>
                <input type='text' name='username' required />
            </div>
            <div className='inputcontainer'>
                <input type='password' name='password' required />
            </div>
            <div className='submit'>
                <input type='submit' />
            </div>
        </form>
    </div>
  )
}

export default LoginScreen