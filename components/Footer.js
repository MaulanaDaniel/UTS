//@ts-nocheck
import Link from 'next/link';
const Footer = () => (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">&copy; Design By : Gallery Motor Indonesia 2021</p>

        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          {/* <svg className="bi me-2" width="40" height="32"></svg> */}
          <img src="iconmotor.jpeg" className="img-fluid" width="40" height="32" alt="ICON"></img>
        </a>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><Link href="/"><a className="nav-link px-2 text-muted">Beranda</a></Link></li>
          <li className="nav-item"><Link href="/artikel"><a className="nav-link px-2 text-muted">Artikel</a></Link></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
          <li className="nav-item"><Link href="/about"><a className="nav-link px-2 text-muted">About</a></Link></li>
        </ul>
      </footer>
    </div>
  );
export default Footer;