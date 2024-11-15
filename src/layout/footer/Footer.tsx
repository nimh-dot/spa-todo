import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import icon_telegram from './img/icon-telegram.svg'
import Logo from '../../components/Logo/Logo'
import { ReactSVG } from 'react-svg'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.footer__social}>
        <a href="https://t.me/mitcham_il">
          <ReactSVG src={icon_telegram} />
        </a>
      </div>
      <span className={styles.footer__copyright}>Created 2024</span>
    </div>
  )
}

export default Footer
