import mainStyles from '@/app/main.module.css';
import Link from 'next/link';
import AdditionTwo from '@/components/math/class-two/addition/AdditionTwo';

const AdditionTwoPage = () => {
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'Strona główna'}</Link>
            <div>
                <AdditionTwo />
            </div>
        </div>
    )
}

export default AdditionTwoPage;
