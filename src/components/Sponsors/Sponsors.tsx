'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './Sponsors.module.scss';

const sponsors = [
  { name: 'Therapinka', description: 'Partner strategiczny' },
  { name: 'EKAN', description: 'Partner technologiczny' },
];

export default function Sponsors() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  return (
    <section className={styles.sponsors} id="sponsors">
      <div className={styles.container}>
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className={styles.title}>
            Nasi <span className={styles.gradient}>Sponsorzy</span>
          </h2>
        </div>

        <div ref={gridRef} className={`${styles.grid} ${gridVisible ? 'fade-in visible' : 'fade-in'}`}>
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className={styles.card}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.cardContent}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoText}>{sponsor.name}</span>
                </div>
                <h3 className={styles.sponsorName}>{sponsor.name}</h3>
                <p className={styles.sponsorDescription}>{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
