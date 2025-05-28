import Link from 'next/link';
import Words from '@/components/words/Words';
import mainStyles from '@/app/main.module.css';

type WordsPageType = {
    params: Promise<{ unitId: string }>
}

const WordsPage = async ({ params }: WordsPageType) => {
    const { unitId } = await params;
    return (
        <div className={mainStyles.pageContainer}>
            <Link className={mainStyles.linkButton} href={'/'}>{'Strona główna'}</Link>
            <Words unitId={Number(unitId)} />
        </div>
    )
}

export default WordsPage;
