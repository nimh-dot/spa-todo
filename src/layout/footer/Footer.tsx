import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import icon_telegram from './img/icon-telegram.svg'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <Link to="/">
          <img src="logo.png" alt="logo"/>
        </Link>
      </div>
      <div className={styles.footer__social}>
        <a href="https://www.facebook.com/">
          <img src={icon_telegram} alt='Icon telegram' />
        </a>
      </div>
      <span className={styles.footer__copyright}>Created 2024</span>
    </div>
  )
}

export default Footer
