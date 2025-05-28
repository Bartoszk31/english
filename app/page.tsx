import Link from 'next/link';
import styles from './main.module.css';
import ClearStore from '@/components/main/clearStore/ClearStore';

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.classSection}>
                <div className={styles.sectionHeader}>{'Klasa 3'}</div>
                <div className={styles.sectionHeader}>{'Angielski'}</div>
                <Link className={styles.linkButton} href={'/class-three/english/words/1'}>{'Unit 1'}</Link>
                <Link className={styles.linkButton} href={'/class-three/english/words/2'}>{'Unit 2'}</Link>
                <Link className={styles.linkButton} href={'/class-three/english/words/3'}>{'Unit 3'}</Link>
                <Link className={styles.linkButton} href={'/class-three/english/words/4'}>{'Unit 4'}</Link>
                <Link className={styles.linkButton} href={'/class-three/english/words/5'}>{'Unit 5'}</Link>
                <Link className={styles.linkButton} href={'/class-three/english/words/6'}>{'Unit 6'}</Link>
            </div>

            <div className={styles.classSection}>
                <div className={styles.sectionHeader}>{'Klasa 2'}</div>
                <div className={styles.sectionHeader}>{'Matematyka'}</div>
                <Link className={styles.linkButton} href={'/class-two/math/multiplication'}>{'Mnożenie'}</Link>
                <Link className={styles.linkButton} href={'/class-two/math/division'}>{'Dzielenie'}</Link>
            </div>
            <hr className={styles.divider} />
            <div>
                <ClearStore />
            </div>
        </div>
    );
}
