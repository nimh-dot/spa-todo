import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div  className={styles.homePage}>

        Home Page
        <Link to="/login">Sign Ii Page</Link>
        <Link to="/register">Sign Up Page</Link>
    </div>
  )
}

export default HomePage
