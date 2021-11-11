import Head from 'next/head';
import HeadHTML from '../components/head'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Beranda() {
  return (
    <div className={styles.container}>
      <HeadHTML />
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Selamat datang di Gallery Motor</h1>
        <p className={styles.description}>
          Jual beli motor murah di Indonesia
        </p>
        <div className={styles.grid}>
          <Link href='/artikel'>
            <a className={styles.card}>
              <h2>Artikel &rarr;</h2>
              <p>
                Kumpulan artikel Tips and Trick seputar Otomotif
              </p>
            </a>
          </Link>
          <Link href='/about'>
            <a className={styles.card}>
              <h2>About &rarr;</h2>
              <p>Untuk yang ingin tahu Gallery Motor</p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
</div >
);
}