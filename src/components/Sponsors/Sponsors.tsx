import styles from './Sponsors.module.scss';

export default function Sponsors() {
  return (
    <section className={styles.sponsors} id="sponsors">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>// Wsparcie</span>
          <h2 className={styles.title}>
            Nasi <span className={styles.gradient}>Sponsorzy</span>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.sponsorName}>Therapinka</h3>
          </div>
          <div className={styles.card}>
            <h3 className={styles.sponsorName}>EKAN</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
