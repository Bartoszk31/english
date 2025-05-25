import Words from '@/components/words/Words';
import Link from 'next/link';
import mainStyles from '../main.module.css';

const WordsPage = () => {
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'angielski'}</Link>
            <Words />
        </div>
    )
}

export default WordsPage;
