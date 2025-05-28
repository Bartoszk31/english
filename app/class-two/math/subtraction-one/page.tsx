import mainStyles from '@/app/main.module.css';
import Link from 'next/link';
import SubtractionOne from '@/components/math/class-two/subtraction/SubtractionOne';

const SubtractionOnePage = () => {
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'Strona główna'}</Link>
            <div>
                <SubtractionOne />
            </div>
        </div>
    )
}

export default SubtractionOnePage;
