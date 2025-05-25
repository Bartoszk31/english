import Link from 'next/link';
import styles from './main.module.css';

export default function Home() {
  return (
      <div className={styles.pageContainer}>
          <Link className={styles.linkButton} href={'/words'}>{'Unit 1'}</Link>
      </div>
  );
}
