import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginPage.module.css'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const emailRef = useRef(null)
  const passRef = useRef(null)

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailRef?.current?.value, passRef?.current?.value)
      .then((userCredential) => {
        console.log(userCredential)
        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
    console.log('click create account')
    console.log(emailRef?.current?.value)
    console.log(passRef?.current?.value)
  }

  return (
    <div className={styles.loginPage}>
        <h1>Sing In Page</h1>
        <form className={styles.form}>
          
          <label htmlFor="user">
            User Email
          </label>
          <input 
            type="email"
            ref={emailRef}
            id='user' 
            placeholder='Enter your email'
          />

          <label htmlFor="password">
            Input your password
          </label>
          <input 
              type="password" 
              ref={passRef}
              placeholder='Enter your password'
            />

          <SubmitButton title='Enter' handleClick={handleLogin}/>
        </form>
        <span className={styles.text}>Please, create an account</span> 
        <Link to="/register"><button>Create account</button></Link>
    </div>
  )
}

export default LoginPage
