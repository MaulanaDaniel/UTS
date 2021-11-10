import NavBar from '../../../components/navbar';
import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';
import HeadHTML from '../../../components/head';
export async function getServerSideProps(context) {
    let idArtikel = context.params.id;
    let judulArtikel = context.params.judul;
    return { props: { idArtikel, judulArtikel } };
}
const Artikel = (props) => (
    <div className={styles.container}>
        <HeadHTML />
        <NavBar />
        <main className={styles.main}>
            <h1 className={styles.title}>Detail Artikel</h1>
            <div className={styles.grid}>
                <table>
                    <tr>
                        <td>ID</td>
                        <td>:</td>
                        <td>{props.idArtikel}</td>
                    </tr>
                    <tr>
                        <td>Judul</td>
                        <td>:</td>
                        <td>{props.judulArtikel}</td>
                    </tr>
                </table>
            </div>
        </main>
    </div>
);
export default Artikel;