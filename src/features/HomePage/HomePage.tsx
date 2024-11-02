import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'
import { useAppDispatch, useAuth } from '../../app/hooks'

const HomePage = () => {
  const isAuth = useAuth().isAuth
  console.log(isAuth)
  const dispatch = useAppDispatch()

  return (
    <div  className={styles.homePage}>

        Home Page
        { !isAuth 
          ? <Link to="/register">Sign Up Page</Link> 
          : <button onClick={()=>{}}>logout</button>}
    </div>
  )
}

export default HomePage
