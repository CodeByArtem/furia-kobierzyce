'use client';

import styles from './Guests.module.scss';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const guests = [
  { id: 1, name: 'Amelia', icon: 'fa-user-clock' },
  { id: 2, name: 'Monika', icon: 'fa-bolt' },
  { id: 3, name: 'Artem', icon: 'fa-user-clock' },
  { id: 4, name: 'Victor', icon: 'fa-bolt' },
];

export default function Guests() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  return (
    <section className={styles.guests}>
      <div className={styles.container}>
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? 'fade-in visible' : 'fade-in'}`}>
          <span className={styles.label}>// Nasi Goście</span>
          <h2 className={styles.title}>
            Stali <span className={styles.accent}>Goście</span>
          </h2>
          <p className={styles.description}>
            Ludzie, którzy nie są w stałym składzie, ale są z nami na każdej treningu. Wspólnie walczymy, pocimy się i rozwijamy – tworzą naszą siatkarską rodzinę.
          </p>
        </div>

        <div ref={gridRef} className={`${styles.grid} ${gridVisible ? 'fade-in visible' : 'fade-in'}`}>
          {guests.map((guest, index) => (
            <div key={guest.id} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.cardIcon}>
                <i className={`fa-solid ${guest.icon}`}></i>
              </div>
              <h3 className={styles.cardName}>{guest.name}</h3>
              <span className={styles.cardLabel}>Stały gość</span>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <span className={styles.ctaText}>Chcesz dołączyć jako gość?</span>
          <a href="#join" className={styles.ctaLink}>
            Napisz do nas!
          </a>
        </div>
      </div>
    </section>
  );
}
