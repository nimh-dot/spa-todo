import { Link } from 'react-router-dom'
import styles from './SignUpPage.module.css'
const SignUpPage = () => {
  return (
    <div className={styles.signUpPage}>
        <h1>Sing Up Page</h1>

        <span className={styles.text}>All ready have account?</span> 
        <Link to="/login"><button>Sign in</button></Link>
    </div>
  )
}

export default SignUpPage
