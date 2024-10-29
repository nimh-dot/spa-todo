import { Link } from 'react-router-dom'
import styles from './SignUpPage.module.css'
import InputEmail from '../../components/InputEmail/InputEmail'
import InputPassword from '../../components/InputPassword/InputPassword'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import { useRef } from 'react'

const SignUpPage = () => {
  const emailRef = useRef(null)
  const passRef = useRef(null)

  const handleCreateAccount = () => {
    console.log('click create account')
    console.log(emailRef?.current?.value)
    console.log(passRef?.current?.value)
  }

  return (
    <div className={styles.signUpPage}>
        <h1>Sing Up Page</h1>

        <form className={styles.form} >
          <label htmlFor="user">
            User Email
          </label>
          <input 
            type="email"
            ref={emailRef}
            id='user' 
            placeholder='Enter your email'
          />
          <label htmlFor="password">Make up your password</label>
          <input 
            type="password" 
            ref={passRef}
            id='password' 
            placeholder='Enter your password'
          />
          <SubmitButton title='Create account' handleClick={handleCreateAccount}/>
        </form>

        <span className={styles.text}>All ready have account?</span> 
        <Link to="/login"><button>Sign in</button></Link>
    </div>
  )
}

export default SignUpPage
