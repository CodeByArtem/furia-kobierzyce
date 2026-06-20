'use client';

import { useState } from 'react';
import styles from './Media.module.scss';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import GalleryModal from '@/components/GalleryModal/GalleryModal';

const galleryItems = [
  { id: 1, type: 'tournament', title: 'Turnieje', date: '2025-2026', icon: 'fa-trophy' },
  { id: 2, type: 'training', title: 'Trening z trenerem', date: 'Feb 2026', icon: 'fa-dumbbell' },
  { id: 3, type: 'team', title: 'Zespół po meczu', date: 'Jan 2026', icon: 'fa-users' },
  { id: 4, type: 'fun', title: 'Integracja', date: '2025-2026', icon: 'fa-heart' },
  { id: 5, type: 'training', title: 'Treningi', date: '2025-2026', icon: 'fa-volleyball' },
];

const placeholderImages = Array.from({ length: 8 }, (_, i) => `placeholder-${i + 1}`);

export default function Media() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [galleryRef, galleryVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1);
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className={styles.media} id="media">
      <div className={styles.container}>
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className={styles.title}>
            Furia w <span className={styles.accent}>Obiektywie</span>
          </h2>
          <p className={styles.description}>
            Emocje, pot, walka na siatce i najlepsze momenty z naszych meczów oraz treningów.
          </p>
        </div>

        <div ref={galleryRef} className={`${styles.gallery} ${galleryVisible ? 'fade-in visible' : 'fade-in'}`}>
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={styles.galleryCard}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(item)}
            >
              <div className={styles.galleryCardIcon}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div className={styles.galleryCardContent}>
                <span className={styles.galleryCardType}>
                  {item.type === 'tournament' ? 'Turnieje' :
                   item.type === 'training' ? 'Treningi' :
                   item.type === 'team' ? 'Zespół' :
                   item.type === 'fun' ? 'Integracja' : item.type}
                </span>
                <h3 className={styles.galleryCardTitle}>{item.title}</h3>
                <span className={styles.galleryCardDate}>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className={`${styles.cta} ${ctaVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Śledź nas w social media</h3>
            <p className={styles.ctaDescription}>
              Zaglądaj za kulisy, oglądaj relacje z meczów i dołącz do naszej społeczności
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://www.instagram.com/furiakobierzyce?igsh=d3MyaTVzbHN0a2Nz&utm_source=qr&fbclid=IwY2xjawSjYlVleHRuA2FlbQIxMABicmlkETE4TEVnblduVUtqUGNsQU9Tc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrjc8jPqjkv2t6_ejLYg_yZd74vlWao69smJlqIjQK6Mw0Am9jNy1wFcUVtq_aem_GiHLLyjhWCtWO_ktpK1rzQ"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaButton} ${styles.ctaButtonInstagram}`}
              >
                <i className="fa-brands fa-instagram"></i>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589415682833"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaButton} ${styles.ctaButtonFacebook}`}
              >
                <i className="fa-brands fa-facebook"></i>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedItem && (
        <GalleryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedItem.title}
          images={placeholderImages}
        />
      )}
    </section>
  );
}
