import { Link } from 'react-router-dom'
import styles from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
        <h1>Sing In Page</h1>

        <span className={styles.text}>Please, create an account</span> 
        <Link to="/register"><button>Create account</button></Link>
    </div>
  )
}

export default LoginPage
