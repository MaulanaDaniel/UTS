import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';

export default function Beranda() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Latihan NextJS</title>
        <meta
          name='description'
          content='Ini adalah website untuk latihan menggunakan NextJS'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Latihan NextJS</h1>
        <p className={styles.description}>
          Mari berlatih hingga menjadi seorang expert
        </p>
        <div className={styles.grid}>
          <Link href='/artikel'>
            <a className={styles.card}>
              <h2>Artikel &rarr;</h2>
              <p>
                Kumpulan artikel yang di-post pada website ini
              </p>
            </a>
          </Link>
          <Link href='/tentang-saya'>
            <a className={styles.card}>
              <h2>Tentang Saya &rarr;</h2>
              <p>Untuk yang ingin tahu banyak tentang saya</p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
</div >
);
}