import Link from 'next/link';
import styles from './main.module.css';

export default function Home() {
  return (
      <div className={styles.pageContainer}>
          <Link className={styles.linkButton} href={'/words/1'}>{'Unit 1'}</Link>
          <Link className={styles.linkButton} href={'/words/2'}>{'Unit 2'}</Link>
          <Link className={styles.linkButton} href={'/words/3'}>{'Unit 3'}</Link>
          <Link className={styles.linkButton} href={'/words/4'}>{'Unit 4'}</Link>
          <Link className={styles.linkButton} href={'/words/5'}>{'Unit 5'}</Link>
          <Link className={styles.linkButton} href={'/words/6'}>{'Unit 6'}</Link>
      </div>
  );
}
