import React, { useState } from 'react'

const Form = () => {
  const [action, setaction] = useState('Login')
  function sendMessage() {
    
  }

  return (
    <div>
        <form className='form' onSubmit={sendMessage}>
            <h2>{action}</h2>
            {action === "Login" ? <div></div> : <div className='form-input'>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
            </div>}
            
            <div className='form-input'>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
            </div>
            <div className='form-input'>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
            </div>
            {action === "Sign Up" ? <div></div> : <div className="lost-password">
                <p>Lost password? <span><a href="">click here</a></span></p>
            </div>}
            <div className='btn-container'>
            <button className={action === 'Login'? "btn active":"btn"} onClick={()=>{setaction("Sign Up")}}>Sign Up</button>
            <button className={action === 'Sign Up'? "btn active":"btn"} onClick={()=>{setaction("Login")}}>Login</button>
            </div>
            <a href="./pages/Chat">chat</a>
        </form>
    </div>
  )
}

export default Form