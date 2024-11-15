import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'
import { useAppDispatch, useAuth } from '../../app/hooks'
import { useEffect, useRef, useState } from 'react'
import Footer from '../../layout/footer/footer'

const HomePage = () => {
  const [isVis, setIsVis] = useState(false)
  const refInput = useRef(null)
  const isAuth = useAuth().isAuth
  // const dispatch = useAppDispatch()

  const toggle = () => {
    setIsVis(!isVis);
  }

  useEffect(() => {
    if (isVis) refInput?.current?.focus()
  }, [isVis])

  return (
    <div  className={styles.homePage}>
      <div className={styles.content}>
        Home Page
        { !isAuth 
          ? <Link to="/register">Sign Up Page</Link> 
          : <button onClick={()=>{}}>logout</button>
        }
        <button onClick={toggle}>Show input and focus it</button>
        {/* {isVis && <input type='text' ref={refInput => refInput?.focus()}/>} */}
        {isVis && <input type='text' ref={refInput}/>}
        {/* {isVis && <input type='text' autoFocus/>} */}
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
