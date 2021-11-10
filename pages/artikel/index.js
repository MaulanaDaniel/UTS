import Link from 'next/link';
import HeadHTML from '../../components/head';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from '../../styles/Home.module.css';

const Artikel = () => (
<div className={styles.container}>
<HeadHTML/>
<NavBar/>
<div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">Tips & Trik</strong>
          <h3 className="mb-0">Pentingnya perawatan mesin bagi pengendara</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <Link href="/artikel/1/kebiasaan-berkendara"><a className="stretched-link">Lanjutkan membaca...</a></Link>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Life Style</strong>
          <h3 className="mb-0">Daya tarik Motor Klasik</h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="mb-auto">karena modelnya yang langka, bentuk yang unik, dan kecepatan yg tidak biasa.</p>
          <Link href="/artikel/2/daya-tarik-motor-klasik"><a className="stretched-link">Lanjutkan membaca...</a></Link>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
    </div>
  </div>
<Footer/>
</div>
);

export default Artikel;