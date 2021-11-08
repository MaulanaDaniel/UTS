import Link from 'next/link';
import style from '../styles/NavBar.module.css';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
const Footer = () => (
    <nav className={style.navbar}>
          <a href="https://vercel.com?utm_source=create-nextapp&utm_medium=default-template&utm_campaign=create-next-app
          target='_blank' rel='noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              width={72}
              height={16}
            />
          </span>
        </a>
    </nav>

);
export default Footer;