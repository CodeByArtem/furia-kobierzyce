'use client';

import { useState } from 'react';
import styles from './Join.module.scss';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    position: 'Przyjmująca/y',
    experience: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię jest wymagane';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Imię musi mieć minimum 2 znaki';
    }

    if (!formData.age) {
      newErrors.age = 'Wiek jest wymagany';
    } else if (parseInt(formData.age) < 16) {
      newErrors.age = 'Musisz mieć minimum 16 lat';
    } else if (parseInt(formData.age) > 100) {
      newErrors.age = 'Proszę podać prawidłowy wiek';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'Doświadczenie jest wymagane';
    } else if (formData.experience.trim().length < 10) {
      newErrors.experience = 'Opisz swoje doświadczenie (minimum 10 znaków)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.join} id="join">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>// Rekrutacja</span>
          <h2 className={styles.title}>
            Rozpal w sobie <span className={styles.accent}>Furię</span>
          </h2>
          <p className={styles.description}>
            Szukamy osób, które kochają siatkówkę tak samo jak my. Przeczytaj zasady i wypełnij formularz zgłoszeniowy!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.rules}>
            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>
                <i className="fa-solid fa-user-check"></i> Kogo szukamy?
              </h3>
              <ul className={styles.ruleList}>
                <li><i className="fa-solid fa-check"></i> Osoby pełnoletnie z opanowanymi podstawami</li>
                <li><i className="fa-solid fa-check"></i> Młodsi zawodnicy (klasa sportowa) – za zgodą rodziców</li>
                <li><i className="fa-solid fa-check"></i> Dobra energia i pozytywne nastawienie</li>
              </ul>
            </div>

            <div className={styles.ruleCard}>
              <h3 className={styles.ruleTitle}>
                <i className="fa-solid fa-clipboard-list"></i> Zasady FURI
              </h3>
              <ul className={styles.ruleList}>
                <li><i className="fa-solid fa-exclamation-circle"></i> Obecności zgłaszamy z wyprzedzeniem</li>
                <li><i className="fa-solid fa-exclamation-circle"></i> Szacunek dla współgraczy</li>
                <li><i className="fa-solid fa-exclamation-circle"></i> Dwa zjazdy w tygodniu: trening z trenerem + gra</li>
              </ul>
            </div>
          </div>

          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Wyślij Zgłoszenie</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Imię i Nazwisko</label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Twoje imię"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Wiek</label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="16"
                    className={`${styles.input} ${errors.age ? styles.inputError : ''}`}
                    placeholder="18"
                    value={formData.age}
                    onChange={handleChange}
                  />
                  {errors.age && <span className={styles.error}>{errors.age}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Pozycja</label>
                  <select
                    name="position"
                    className={styles.select}
                    value={formData.position}
                    onChange={handleChange}
                  >
                    <option>Przyjmująca/y</option>
                    <option>Rozgrywająca/y</option>
                    <option>Atakująca/y</option>
                    <option>Środkowa/y</option>
                    <option>Libero</option>
                    <option>Zaczynam / Nie wiem</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Doświadczenie</label>
                <textarea
                  name="experience"
                  required
                  rows={3}
                  className={`${styles.textarea} ${errors.experience ? styles.inputError : ''}`}
                  placeholder="Napisz krótko o swoim doświadczeniu z siatkówką..."
                  value={formData.experience}
                  onChange={handleChange}
                />
                {errors.experience && <span className={styles.error}>{errors.experience}</span>}
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={submitted || loading}
              >
                {loading ? 'Wysyłanie...' : submitted ? 'Wysłano!' : 'Wyślij zgłoszenie'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
