import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.css'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch, useAuth } from '../../app/hooks';
import { setUser } from '../../app/userSlice'


const LoginPage = () => {
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  // const isAuth = useAuth()

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailRef?.current?.value, passRef?.current?.value)
      .then((userCredential) => {
        // console.log('successful login: ', userCredential)
        dispatch(setUser({
          email: userCredential?.user?.email,
          id: userCredential?.user?.uid,
          token: userCredential?.user?.accessToken,
        }))
        // console.log(isAuth)
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
    // console.log('click login')
    // console.log(emailRef?.current?.value)
    // console.log(passRef?.current?.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className={styles.loginPage}>
        <h1>Login Page</h1>
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
              id='password'
              placeholder='Enter your password'
              onKeyDown ={(e) => {handleKeyPress(e)}}
            />
        </form>
        <SubmitButton title='Enter' handleClick={handleLogin}/>
        <span className={styles.text}>Please, create an account</span> 
        <Link to="/register"><button>Create account</button></Link>
    </div>
  )
}

export default LoginPage
