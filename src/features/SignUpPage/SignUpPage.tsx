import { Link } from 'react-router-dom'
import styles from './SignUpPage.module.css'
import InputEmail from '../../components/InputEmail/InputEmail'
import InputPassword from '../../components/InputPassword/InputPassword'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

const SignUpPage = () => {
  return (
    <div className={styles.signUpPage}>
        <h1>Sing Up Page</h1>

        <form >
          <label htmlFor="user">
            User Email
          </label>
          <InputEmail></InputEmail>
          <label htmlFor="password">make up your password</label>
          <InputPassword></InputPassword>
          <SubmitButton/>
        </form>

        <span className={styles.text}>All ready have account?</span> 
        <Link to="/login"><button>Sign in</button></Link>
    </div>
  )
}

export default SignUpPage
