import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer-contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Furia Kobierzyce</h3>
            <p className={styles.description}>
              Pasja, wspólny rozwój, dobra energia. Amatorska drużyna siatkówki z Kobierzyc.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.title}>Nawigacja</h3>
            <ul className={styles.links}>
              <li><a href="#roster" className={styles.link}>Skład Drużyny</a></li>
              <li><a href="#media" className={styles.link}>Media</a></li>
              <li><a href="#join" className={styles.link}>Dołącz do nas</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.title}>Social Media</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/furiakobierzyce?igsh=d3MyaTVzbHN0a2Nz&utm_source=qr&fbclid=IwY2xjawSjYlVleHRuA2FlbQIxMABicmlkETE4TEVnblduVUtqUGNsQU9Tc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrjc8jPqjkv2t6_ejLYg_yZd74vlWao69smJlqIjQK6Mw0Am9jNy1wFcUVtq_aem_GiHLLyjhWCtWO_ktpK1rzQ"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.socialLinkInstagram}`}
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589415682833"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.socialLinkFacebook}`}
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; 2026 Furia Kobierzyce. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
