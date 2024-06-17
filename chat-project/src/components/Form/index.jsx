// import { onValue, push, ref, set } from 'firebase/database';
// import React, { useState } from 'react'
// import { useForm } from "react-hook-form";
// import { db } from '../../firebase';
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


// const Form = () => {
//   const [action, setaction] = useState('Login')
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [pass, setPass] = useState('')

//   function SignUp(e) {
//     e.preventDefault()
//     setaction('Sign Up')
//   }
//   function Login(e) {
//     e.preventDefault()
//     setaction('Login')
//   }

  


//   const auth = getAuth()
//   createUserWithEmailAndPassword(name, email, password)
//   .then((userCredential)=> {
//     const user = userCredential.user
//   })
//   .catch((error) => {
//     const errorCode = error.code
//   })


//   // const register = async ()=>{
//   //   try{
//   //     await createUserWithEmailAndPassword(auth, email, password)
//   //     console.log("succes");
//   //   }catch(error){
//   //     console.log(error);
//   //   }
//   // }


//   function addUser(e) {
//     e.preventDefault()
//     const userRef = ref(db, 'users/')
//     const user = {
//       name: name,
//       email: email,
//       password: pass
//     }
//     if (!name || !email || !pass) return
//     try {
//       onValue(userRef, (snapshot) => {
//         const data = snapshot.val()
//         console.log(data)
//       });

//       setName('')
//       setEmail('')
//       setPass('')
//     } catch (error) {
//       console.log(error)
//     }



//   }



//   return (
//     <div>
//       <form className='form-sign' onSubmit={addUser}>
//         <h2>{action}</h2>
//         {action === "Login" ? <div></div> : <div className='form-input'>
//           <label htmlFor="name">Name</label>
//           <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>}

//         <div className='form-input'>
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div className='form-input'>
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
//         </div>
//         {action === "Sign Up" ? <div></div> : <div className="lost-password">
//           <p>Lost password? <span><a href="">click here</a></span></p>
//         </div>}
//         <div className='btn-container'>
//           <button className={action === 'Login' ? "btn active" : "btn"} onClick={action === 'Sign Up' ? addUser : SignUp}>Sign Up</button>
//           <button className={action === 'Sign Up' ? "btn active" : "btn"} onClick={Login}>Login</button>
//           {/* <button className="btn" type='submit' onClick={addUser}>testbtn</button> */}
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Form


import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { dbase } from '../../firebase';

const Form = () => {
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
      const userRef = ref(dbase, 'users/' + user.uid);
      await set(userRef, {
        name: name,
        email: email
      });
      console.log("User registered and data saved:", user);
      setName('');
      setEmail('');
      setPass('');
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
      console.log("User logged in:", user);
      setEmail('');
      setPass('');
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <form className='form-sign' onSubmit={action === 'Sign Up' ? handleSignUp : handleLogin}>
        <h2>{action}</h2>
        {action === "Sign Up" && (
          <div className='form-input'>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}
        <div className='form-input'>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-input'>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>
        {action === "Login" && (
          <div className="lost-password">
            <p>Lost password? <span><a href="">click here</a></span></p>
          </div>
        )}
        <div className='btn-container'>
          <button type='button' className={action === 'Login' ? "btn active" : "btn"} onClick={() => setAction('Sign Up')}>Sign Up</button>
          <button type='button' className={action === 'Sign Up' ? "btn active" : "btn"} onClick={() => setAction('Login')}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;




















