'use client';

import { clearStore } from '@/lib/storePoints';
import styles from '@/app/main.module.css';

const ClearStore = () => {
    return (
        <div>
            <button
                className={styles.linkButton}
                onClick={clearStore}
            >
                {'Reset punktów'}
            </button>
        </div>
    )
}

export default ClearStore;
