import mainStyles from '@/app/main.module.css';
import Link from 'next/link';
import Multiplication from '@/components/math/multiplication/Multiplication';

const MathMultiple = () => {
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'Strona główna'}</Link>
            <div>
                <Multiplication />
            </div>
        </div>
    )
}

export default MathMultiple;
