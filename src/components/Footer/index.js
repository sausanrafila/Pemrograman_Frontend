import styles from './Footer.module.css'

function Footer() {
  return (
  <div className={styles.container}>
    <footer className={styles.footer}>
      <div>
        <h2>Covid ID</h2>
        <p>Developed by sausan</p>
      </div>
      <div>
        <ul className={styles.footer__list}>
          <li className={styles.footer_s}>Global</li>
          <li className={styles.footer_s}>Indonesia</li>
          <li className={styles.footer_s}>Provinsi</li>
          <li className={styles.footer_s}>About</li>
        </ul>
      </div>
    </footer>
  </div>
  )
}

export default Footer;
