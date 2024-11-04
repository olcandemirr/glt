import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* Menü Bölümü */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Genç Liderler Topluluğu" className={styles.logoImage} />
          <h1 className={styles.siteTitle}>Genç Liderler Topluluğu</h1>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/management">Yönetim Kadromuz</Link></li>
          <li><Link href="/events">Etkinlikler</Link></li>
          <li><Link href="/gallery">Galeri</Link></li>
          <li><a href="https://pusula.pau.edu.tr/Login.aspx?appKey=362a6" target="_blank" rel="noopener noreferrer">SKS Üyeliği</a></li>
        </ul>
      </nav>

      {/* Öne Çıkan Etkinlikler */}
      <section className={styles.featuredEventsSection}>
      <center><h2 className={styles.title}>Öne Çıkan Etkinlikler</h2></center>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/etkinlik1.jpg" alt="Tanışma Etkinliğimiz" className={styles.image} />
            <h3 className={styles.eventTitle}>Tanışma Etkinliğimiz</h3>
            <p className={styles.eventDescription}>Döneme Merhaba etkinliğimizle sizlerleyiz.</p>
          </div>
          <div className={styles.card}>
            <img src="/logo.png" alt="İkinci Etkinlik" className={styles.image} />
            <h3 className={styles.eventTitle}>İkinci Etkinlik</h3>
            <p className={styles.eventDescription}>Kısa etkinlik açıklaması.</p>
          </div>
          <div className={styles.card}>
            <img src="/logo.png" alt="Üçüncü Etkinlik" className={styles.image} />
            <h3 className={styles.eventTitle}>Üçüncü Etkinlik</h3>
            <p className={styles.eventDescription}>Etkinlik detayları burada yer alır.</p>
          </div>
        </div>
      </section>

      {/* Hakkında Bölümü */}
      <section className={styles.aboutSection}>
        <h2>Hakkımızda</h2>
        <p>Genç Liderler Topluluğu, üniversite öğrencilerinin liderlik becerilerini geliştirmeyi ve sosyal sorumluluk projeleriyle topluma katkıda bulunmayı amaçlayan bir topluluktur.</p><br></br>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/company/paugencliderler" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/paugencliderler" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={styles.icon} />
          </a><br></br><br></br><br></br>
        </div>
        <a href="https://chat.whatsapp.com/I2jeamhiSSn8uKsviKJHuD" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
          WhatsApp Grubuna Katıl
        </a><br></br>
      </section>
    </main>
  );
}
