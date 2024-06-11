import React, { useState } from 'react'

const Form = () => {
  const [action,setaction] = useState('Login')

  return (
    <div>
        <div className='form'>
            <h2>{action}</h2>
            <div className='form-input'>
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>
            <div className='form-input'>
                <label htmlFor="">Password</label>
                <input type="password" />
            </div>
            <div className='btn-container'>
            <button className={action === 'Login'? "btn active":"btn"}>Sign Up</button>
            <button className={action === 'Sign Up'? "btn active":"btn"}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Form