'use client';

import styles from './Hero.module.scss';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Sezon 2026
          </div>
          <h1 className={styles.title}>
            Furia <br />
            <span className={styles.gradient}>Kobierzyce</span>
          </h1>
          <p className={styles.subtitle}>
            Pasja, wspólny rozwój, dobra energia 💖🔥<br />
            Amatorska drużyna siatkówki.
          </p>
          <div className={styles.buttons}>
            <a href="#roster" className={`${styles.button} ${styles.buttonPrimary}`}>
              Poznaj Drużynę
            </a>
            <a href="#join" className={`${styles.button} ${styles.buttonSecondary}`}>
              Zagraj z nami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
