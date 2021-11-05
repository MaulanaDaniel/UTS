import Link from 'next/link';
import style from '../styles/NavBar.module.css';
const NavBar = () => (
    <nav className={style.navbar}>
        <ul>
            <li>
                <Link href='/'>
                    <a>Beranda</a>
                </Link>
            </li>
            <li>
                <Link href='/artikel'>
                    <a>Artikel</a>
                </Link>
            </li>
            <li>
                <Link href='/tentang-saya'>
                    <a>About</a>
                </Link>
            </li>
        </ul>
    </nav>
);
export default NavBar;