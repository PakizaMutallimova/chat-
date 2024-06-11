import React, { useState } from 'react'

const Form = () => {
  const [action, setaction] = useState('Login')

  return (
    <div>
        <div className='form'>
            <h2>{action}</h2>
            {action === "Login" ? <div></div> : <div className='form-input'>
                <label for="name" htmlFor="">Name</label>
                <input id="name" type="text" />
            </div>}
            
            <div className='form-input'>
                <label for="email" htmlFor="">Email</label>
                <input id="email" type="email" />
            </div>
            <div className='form-input'>
                <label for="password" htmlFor="">Password</label>
                <input id="password" type="password" />
            </div>
            {action === "Sign Up" ? <div></div> : <div className="lost-password">
                <p>Lost password? <span><a href="">click here</a></span></p>
            </div>}
            <div className='btn-container'>
            <button className={action === 'Login'? "btn active":"btn"} onClick={()=>{setaction("Sign Up")}}>Sign Up</button>
            <button className={action === 'Sign Up'? "btn active":"btn"} onClick={()=>{setaction("Login")}}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Form