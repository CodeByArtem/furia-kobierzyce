import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer-contact">
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; 2026 Furia Kobierzyce. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
