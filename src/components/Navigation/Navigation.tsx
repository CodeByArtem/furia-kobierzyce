'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`} role="navigation" aria-label="Główna nawigacja">
      <div className={styles.container}>
        <div className={styles.content}>
          <a href="#home" className={styles.logo} onClick={closeMenu} aria-label="Furia Kobierzyce - Strona główna">
            <img src="/logo-furia.webp" alt="Furia Kobierzyce Logo" className={styles.logoImage} loading="eager" />
          </a>

          <button
            className={styles.burger}
            onClick={toggleMenu}
            aria-label="Otwórz menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpen : ''}`} aria-hidden="true"></span>
            <span className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpen : ''}`} aria-hidden="true"></span>
            <span className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpen : ''}`} aria-hidden="true"></span>
          </button>

          <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`} id="mobile-menu" role="menu">
            <a href="#home" className={styles.link} onClick={closeMenu} role="menuitem">Start</a>
            <a href="#history" className={styles.link} onClick={closeMenu} role="menuitem">Historia</a>
            <a href="#roster" className={styles.link} onClick={closeMenu} role="menuitem">Skład</a>
            <a href="#sponsors" className={styles.link} onClick={closeMenu} role="menuitem">Sponsorzy</a>
            <a href="#media" className={styles.link} onClick={closeMenu} role="menuitem">Media</a>
            <a href="#join" className={styles.linkAccent} onClick={closeMenu} role="menuitem">Dołącz do nas</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
