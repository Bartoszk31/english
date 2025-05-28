import mainStyles from '@/app/main.module.css';
import Link from 'next/link';
import MultiplicationOne from '@/components/math/class-three/multiplicaion/MultiplicationOne';

const MathMultiplicationOnePage = () => {
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'Strona główna'}</Link>
            <div>
                <MultiplicationOne />
            </div>
        </div>
    )
}

export default MathMultiplicationOnePage;
