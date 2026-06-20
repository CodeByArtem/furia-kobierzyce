'use client';

import styles from './History.module.scss';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function History() {
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  return (
    <section className={styles.history} id="history">
      <div className={styles.background}></div>
      <div className={styles.glow}></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div ref={contentRef} className={`${styles.content} ${contentVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <h2 className={styles.title}>
              Skąd wzięła się <span className={styles.gradient}>Furia?</span>
            </h2>
            <div className={styles.text}>
              <p>
                Furia Kobierzyce powstała w listopadzie 2025 roku z prawdziwej pasji i głodu gry. Zaczęło się od grupy znajomych, dla których rekreacyjne przebijanie piłki to było zdecydowanie za mało. Chcieliśmy stworzyć coś więcej – zespół na poziomie minimum średniozaawansowanym, który trenuje na 100%, rozwija się technicznie i walczy w turniejach bez taryfy ulgowej. Ze względu na spore zainteresowanie nasze szeregi otworzyliśmy również na mężczyzn.
              </p>
              <p>
                <strong>Dlaczego "Furia"?</strong> Ponieważ ta nazwa najlepiej oddaje nasz charakter. Jesteśmy drużyną, która zostawia serce na parkiecie i walczy o każdą piłkę. Poza halą jesteśmy zgraną paczką przyjaciół, ale po usłyszeniu pierwszego gwizdka wstępuje w nas prawdziwa siatkarska furia.
              </p>
            </div>
          </div>

          <div ref={cardsRef} className={`${styles.cards} ${cardsVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <i className="fa-solid fa-flag"></i>
              </div>
              <h3 className={styles.cardTitle}>Początki</h3>
              <p className={styles.cardText}>Powstaliśmy w listopadzie 2025 roku z grupy znajomych. Dziś jesteśmy pełnoprawnym zespołem.</p>
            </div>

            <div className={`${styles.card} ${styles.cardOffset}`}>
              <div className={styles.icon}>
                <i className="fa-solid fa-crosshairs"></i>
              </div>
              <h3 className={styles.cardTitle}>Nasz Cel</h3>
              <p className={styles.cardText}>Zbudowanie drużyny na poziomie średniozaawansowanym. Stawiamy na rozwój techniki i zgranie.</p>
            </div>

            <div className={`${styles.card} ${styles.cardWide}`}>
              <div className={styles.cardContent}>
                <div className={`${styles.icon} ${styles.iconLarge}`}>
                  <i className="fa-solid fa-fire-flame-curved"></i>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Dobra Energia</h3>
                  <p className={styles.cardText}>Naszym celem są aktywne spotkania w super wesołej atmosferze – bez stresu i oceniania. Liczy się przyjaźń i radość z gry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
