import mainStyles from '@/app/main.module.css';
import Link from 'next/link';
import AdditionOne from '@/components/math/class-two/addition/AdditionOne';

const AdditionOnePage = () => {
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'Strona główna'}</Link>
            <div>
                <AdditionOne />
            </div>
        </div>
    )
}

export default AdditionOnePage;
