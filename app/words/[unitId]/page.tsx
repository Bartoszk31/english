import Words from '@/components/words/Words';
import Link from 'next/link';
import mainStyles from '../../main.module.css';

type WordsPageType = {
    params: Promise<{ unitId: string }>
}

const WordsPage = async ({ params }: WordsPageType) => {
    const { unitId } = await params;
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'angielski'}</Link>
            <Words unitId={Number(unitId)} />
        </div>
    )
}

export default WordsPage;
