import HeadHTML from '../components/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
const Artikel = () => (
    <div className={styles.container}>
        <HeadHTML />
        <NavBar />
        <body>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3">
                    <h1>About</h1>
                    <p className="lead">Hal menarik tentang Gallery Motor Indonesia.</p>
                    <img src="iconmotor.jpeg" className="img-fluid" alt="ICON"></img>
                    <p className="lead">
                        <Link href="/"><a className="btn btn-lg btn-secondary fw-bold border-blue bg-blue">Kunjungi</a></Link>
                    </p>
                </main>
            </div>
        </body>
        <Footer />
    </div>
);
export default Artikel;