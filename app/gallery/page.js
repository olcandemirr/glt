// app/gallery.js

import React from 'react';
import Link from 'next/link';
import styles from './gallery.module.css'; // CSS dosyasını oluşturmayı unutmayın

export default function GalleryPage() {
  return (
    <div className={styles.container}>
      {/* Üst Menü */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Genç Liderler Topluluğu" className={styles.logoImage} />
          <h1 className={styles.siteTitle}>Genç Liderler Topluluğu</h1>
        </div>
        <ul className={styles.navLinks}>
          
          <li><Link href="/management">Yönetim Kadromuz</Link></li>
          <li><Link href="/events">Etkinlikler</Link></li>
          <li><Link href="/gallery">Galeri</Link></li>
          <li>
            <a href="https://pusula.pau.edu.tr/Login.aspx?appKey=362a6" target="_blank" rel="noopener noreferrer">
              SKS Üyeliği
            </a>
          </li>
        </ul>
      </nav>

      {/* Galeri Başlık */}
     <center><h2 className={styles.title}>Etkinliklerimizden Fotoğraflar</h2></center> 

      {/* Fotoğraf Galerisi */}
      <section className={styles.gallerySection}>
        <div className={styles.photoCard}>
          <img src="/logo.png" alt="Etkinlik 1" />
          <p>Etkinlik 1</p>
        </div>
        <div className={styles.photoCard}>
          <img src="/logo.png" alt="Etkinlik 2" />
          <p>Etkinlik 2</p>
        </div>
        <div className={styles.photoCard}>
          <img src="/logo.png" alt="Etkinlik 3" />
          <p>Etkinlik 3</p>
        </div>
        <div className={styles.photoCard}>
          <img src="/logo.png" alt="Etkinlik 1" />
          <p>Etkinlik 4</p>
        </div>
        <div className={styles.photoCard}>
          <img src="/logo.png" alt="Etkinlik 1" />
          <p>Etkinlik 5</p>
        </div>
       
      </section>
      
     <center> <Link href="/" className={styles.backButton}>Ana Sayfaya Dön</Link></center>
    </div>
  );
}
