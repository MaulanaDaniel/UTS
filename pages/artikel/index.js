import Link from 'next/link';
import HeadHTML from '../../components/head';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from '../../styles/Home.module.css';

const Artikel = () => (
<div className={styles.container}>
<HeadHTML/>
<NavBar/>
<Footer/>
</div>
);

export default Artikel;