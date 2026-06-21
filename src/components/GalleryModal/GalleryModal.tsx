'use client';

import { useEffect } from 'react';
import styles from './GalleryModal.module.scss';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
}

export default function GalleryModal({ isOpen, onClose, title, images }: GalleryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Zamknij">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.gallery}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>
                <i className="fa-solid fa-image"></i>
                <span>Zdjęcie {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
