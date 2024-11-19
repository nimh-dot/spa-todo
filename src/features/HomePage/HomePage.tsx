import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'
import { useAppDispatch, useAuth } from '../../app/hooks'
import { deleteUser } from '../../app/userSlice'
import Footer from '../../layout/footer/Footer'

const HomePage = () => {
  const isAuth = useAuth().isAuth
  const dispatch = useAppDispatch()

  return (
    <div  className={styles.homePage}>
      <div className={styles.content}>
        Home Page
        { !isAuth 
          ? <Link to="/login">Login Page</Link> 
          : <button onClick={()=>{
              dispatch(deleteUser())
            }}>logout</button>
        }
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
