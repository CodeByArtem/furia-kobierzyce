'use client';

import { useState, useEffect } from 'react';
import styles from './Roster.module.scss';
import { players } from '@/data/players';

export default function Roster() {
  const [activePlayer, setActivePlayer] = useState(players[3]);
  const [voted, setVoted] = useState(false);
  const [focusedPlayerIndex, setFocusedPlayerIndex] = useState<number | null>(null);

  const handlePlayerClick = (playerId: string) => {
    const player = players.find((p) => p.id === playerId);
    if (player) setActivePlayer(player);
  };

  const handleVote = () => {
    setVoted(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number, isCourt: boolean) => {
    const totalPlayers = players.length;
    const courtPlayers = 6;
    const benchPlayers = totalPlayers - courtPlayers;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = (index + 1) % totalPlayers;
        setFocusedPlayerIndex(nextIndex);
        setActivePlayer(players[nextIndex]);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = (index - 1 + totalPlayers) % totalPlayers;
        setFocusedPlayerIndex(prevIndex);
        setActivePlayer(players[prevIndex]);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        setActivePlayer(players[index]);
        break;
    }
  };

  useEffect(() => {
    setActivePlayer(players[3]);
  }, []);

  return (
    <section className={styles.roster} id="roster">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>// Skład Drużyny</span>
          <h2 className={styles.title}>
            Nasze <span className={styles.accent}>Zawodniczki</span>
          </h2>
          <p className={styles.description}>
            Wybierz zawodniczkę z boiska lub ławki rezerwowych, aby zobaczyć profil.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.courtSection}>
            <div className={styles.court}>
              <div className={styles.courtArea}>
                <div className={styles.courtLineTop}></div>
                <div className={styles.courtLineMiddle}></div>
                <div className={styles.courtLineBottom}></div>
              </div>

              <div className={styles.courtPlayers}>
                {players.slice(0, 6).map((player, index) => (
                  <button
                    key={player.id}
                    className={`${styles.playerNode} ${activePlayer.id === player.id ? styles.playerNodeActive : ''}`}
                    onClick={() => handlePlayerClick(player.id)}
                    onKeyDown={(e) => handleKeyDown(e, index, true)}
                    tabIndex={0}
                    aria-label={`Zawodniczka numer ${player.number}, ${player.name}`}
                    aria-pressed={activePlayer.id === player.id}
                  >
                    {player.number}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.bench}>
              <div className={styles.benchLabel}>
                <i className="fa-solid fa-chair"></i> Ławka rezerwowych
              </div>
              <div className={styles.benchPlayers}>
                {players.slice(0, 6).map((player, index) => (
                  <button
                    key={player.id}
                    className={`${styles.benchNode} ${activePlayer.id === player.id ? styles.benchNodeActive : ''}`}
                    onClick={() => handlePlayerClick(player.id)}
                    onKeyDown={(e) => handleKeyDown(e, index + 6, false)}
                    tabIndex={0}
                    aria-label={`Zawodniczka numer ${player.number}, ${player.name} - ławka rezerwowych`}
                    aria-pressed={activePlayer.id === player.id}
                  >
                    {player.number}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardGlow}></div>
            <div className={styles.cardBg}>#{activePlayer.number}</div>
            
            <div className={styles.cardHeader}>
              <div className={styles.imageWrapper}>
                <img
                  src={activePlayer.imageUrl}
                  alt={activePlayer.name}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.numberInfo}>
                <span className={styles.number}>#{activePlayer.number}</span>
                <span className={styles.position}>{activePlayer.position}</span>
              </div>
            </div>

            <h3 className={styles.name}>{activePlayer.name}</h3>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Wzrost</span>
                <span className={styles.statValue}>{activePlayer.height}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Główny atut</span>
                <span className={styles.statValueAccent}>{activePlayer.trait}</span>
              </div>
            </div>

            <p className={styles.playerDescription}>{activePlayer.description}</p>

            <div className={styles.mvpSection}>
              <div className={styles.mvpLabel}>
                <i className="fa-solid fa-star"></i> MVP Meczu
              </div>
              <button
                className={styles.mvpButton}
                onClick={handleVote}
                disabled={voted}
              >
                <div className={styles.mvpProgress} style={{ width: voted ? '78%' : '0%' }}></div>
                <span className={styles.mvpButtonText}>
                  {voted ? (
                    <>
                      <i className="fa-solid fa-check"></i> Oddano głos
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-fire"></i> Głosuj
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
