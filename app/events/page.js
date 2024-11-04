// app/events/page.js
import Link from 'next/link';
import styles from './events.module.css';

export default function Events() {
  const events = [
    { title: "Tanışma etkinliği", description: "tanışma etkinliği yaptık", image: "/etkinlik1.jpg" },
    { title: "Etkinlik 2", description: "Kısa açıklama 2", image: "/logo.png" },
    { title: "Etkinlik 3", description: "Kısa açıklama 3", image: "/logo.png" },
    { title: "Etkinlik 4", description: "Kısa açıklama 4", image: "/logo.png" },
    { title: "Etkinlik 5", description: "Kısa açıklama 3", image: "/logo.png" },
    { title: "Etkinlik 6", description: "Kısa açıklama 4", image: "/logo.png" },
  
  ];

  return (
    <div className={styles.container}>
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

      <center><h2 className={styles.title}>Etkinlikler</h2></center>
      <div className={styles.grid}>
        {events.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} className={styles.image} />
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.description}>{event.description}</p>
          </div>
        ))}
      </div>
      {/* Geri Dön Butonu */}
      <div className={styles.backButtonContainer}>
        <Link href="/" className={styles.backButton}>
          Geri Dön
        </Link>
      </div>
    </div>
    
    
  );
}
