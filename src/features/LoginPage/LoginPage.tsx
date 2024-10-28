import { Link } from 'react-router-dom'
import styles from './LoginPage.module.css'
import InputEmail from '../../components/InputEmail/InputEmail'
import InputPassword from '../../components/InputPassword/InputPassword'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
        <h1>Sing In Page</h1>
        <form >
          <label htmlFor="user">
            User Email
          </label>
          <InputEmail></InputEmail>
          <label htmlFor="password">input your password</label>
          <InputPassword></InputPassword>
          <SubmitButton/>
        </form>
        <span className={styles.text}>Please, create an account</span> 
        <Link to="/register"><button>Create account</button></Link>
    </div>
  )
}

export default LoginPage
