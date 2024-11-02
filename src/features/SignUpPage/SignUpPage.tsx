import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useAppDispatch } from '../../app/hooks'
import { setUser } from '../../app/userSlice'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import styles from './SignUpPage.module.css'

const SignUpPage = () => {
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleCreateAccount = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, emailRef?.current?.value, passRef?.current?.value)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('My error message', errorCode, errorMessage)
      }) 
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
        </form>
        <SubmitButton title='Create account' handleClick={handleCreateAccount}/>

        <span className={styles.text}>Already have account?</span> 
        <Link to="/login"><button>Sign in</button></Link>
    </div>
  )
}

export default SignUpPage
