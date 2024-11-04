import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
 

export default function ManagementPage() {
  return (
    

      <div className={styles.container}>
      {/* Menü Bölümü */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Genç Liderler Topluluğu" className={styles.logoImage} />
          <h1 className={styles.siteTitle}>  Genç Liderler Topluluğu</h1>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/management">Yönetim Kadromuz</Link></li>
          <li><Link href="/events">Etkinlikler</Link></li>
          <li><Link href="/gallery">Galeri</Link></li>
           <li><a href="https://example.com/sks-registration" target="_blank" rel="noopener noreferrer">SKS Üyeliği</a></li>
        </ul>
      </nav>

      <center><h2 className={styles.title}>Yönetim Kadromuz</h2></center>
      <section className={styles.managementSection}>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 1" />
          <b><h3>Sümeyye Şener </h3></b>
          <p>Başkan</p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 2" />
          <b><h3>Çağan Karataş</h3></b>
          <p>Başkan Yardımcısı</p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 3" />
          <b><h3>Semih Sarıcı</h3></b>
          
        </div>
        
        <div className={styles.memberCard}>
          <img src="/logo.png" alt="4" />
          <b> <h3>Ömer Yiğit</h3></b>
          <p></p>
        </div>
        
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 5" />
          <b><h3>Furkan Ölmez</h3></b>
          <p></p>
        </div>
        
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 6" />
          <b><h3>Bekir Berat Kurt</h3></b>
          <p></p>
        </div>
        
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 7" />
          <b><h3> Tuğçe Akış</h3></b>
          <p></p>
        </div>
        
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 8" />
          <b><h3>Kübra Taşkın</h3></b>
          <p></p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 9" />
          <b> <h3>Tuğba Demirci</h3></b>
          <p></p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 10" />
          <b>  <h3>Hakkı Yaren</h3></b>
          <p></p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 11" />
          <b> <h3>Mine Kılıç</h3></b>
          <p></p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 12" />
          <b> <h3>Yağmur Kobak</h3></b>
          <p></p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 14" />
          <b><h3>Ceren Karademir</h3></b>
          <p></p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 14" />
          <b><h3>Begüm Özcan</h3></b>
          <p></p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 15" />
          <b><h3>Ilgın Eda Kahraman</h3></b>
          <p></p>
        </div>
        <div className={styles.memberCard}>
          <img src="/logo.png" alt=" 16" />
          <b> <h3>Furkan  Yıldırım</h3></b>
          <p></p>
        </div>
        
        
      </section>
     <center> <Link href="/" className={styles.backButton}>Ana Sayfaya Dön</Link></center>
    </div>
  );
}
