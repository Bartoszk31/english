import mainStyles from '@/app/main.module.css';
import Link from 'next/link';
import Division from '@/components/math/division/Division';

const DivisionPage = () => {
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'Strona główna'}</Link>
            <div>
                <Division />
            </div>
        </div>
    )
}

export default DivisionPage;
