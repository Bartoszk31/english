import mainStyles from '@/app/main.module.css';
import Link from 'next/link';
import MultiplicationTwo from '@/components/math/class-three/multiplicaion/MultiplicationTwo';

const MathMultiplicationTwoPage = () => {
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'Strona główna'}</Link>
            <div>
                <MultiplicationTwo />
            </div>
        </div>
    )
}

export default MathMultiplicationTwoPage;
