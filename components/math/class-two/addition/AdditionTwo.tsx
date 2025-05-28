'use client';

import { useEffect, useRef, useState } from 'react';
import getRandomNumber from '@/lib/getRandomNumber';
import { getStorePoints, setStorePoints } from '@/lib/storePoints';
import mainStyles from '@/app/main.module.css';

const AdditionTwo = () => {
    const storageKey = 'c2_m_a2'
    const [points, setPoints] = useState(0);
    const [answerInfo, setAnswerInfo] = useState('');

    const [numbers, setNumbers] = useState<Array<Array<number>>>(
        [
            [0,0,0],
            [0,0,0],
        ]
    );
    const inputRef = useRef<HTMLInputElement>(null);

    const createNumbers = () => {
        const randomNumbers: Array<Array<number>> = [
            [0,0,0],
            [0,0,0],
        ];

        randomNumbers[0][0] = getRandomNumber(0, 9);
        randomNumbers[1][0] = getRandomNumber(0, 9 - randomNumbers[0][0]);
        randomNumbers[0][1] = getRandomNumber(0, 9);
        randomNumbers[1][1] = getRandomNumber(0, 9 - randomNumbers[0][1]);
        randomNumbers[0][2] = getRandomNumber(0, 9);
        randomNumbers[1][2] = getRandomNumber(0, 9 - randomNumbers[0][2]);

        setNumbers(randomNumbers);
        inputRef?.current?.focus();
    }

    const checkAnswer = (formData: FormData) => {
        const answer1 = Number(formData.get('answer1'));
        const answer2 = Number(formData.get('answer2'));
        const answer3 = Number(formData.get('answer3'));

        if (
            numbers[0][0] + numbers[1][0] === answer1
            && numbers[0][1] + numbers[1][1] === answer2
            && numbers[0][2] + numbers[1][2] === answer3
        ) {
            const newPoints = points+1;
            setPoints(newPoints);
            setStorePoints(storageKey, newPoints);
            setAnswerInfo('Dobrze');
            createNumbers();
        } else {
            const newPoints = (points - 1) < 0 ? 0 : (points - 1);
            setPoints(newPoints);
            setStorePoints(storageKey, newPoints);
            setAnswerInfo('Źle');
        }
    }

    useEffect(() => {
        setPoints(getStorePoints(storageKey));
        createNumbers();
    }, []);

    return (
        <div>
            <div className={mainStyles.pointsContainer}>
                {'Punkty: '}{points}{' - '}{answerInfo}
            </div>
            <form action={checkAnswer}>
                <div>
                    <table className={mainStyles.additionTable}>
                        <tbody>
                        <tr>
                            <td></td>
                            <td className={mainStyles.additionTableCell}>{numbers[0][0]}</td>
                            <td className={mainStyles.additionTableCell}>{numbers[0][1]}</td>
                            <td className={mainStyles.additionTableCell}>{numbers[0][2]}</td>
                        </tr>
                        <tr className={mainStyles.additionTableSummaryRow}>
                            <td className={mainStyles.additionTableCell}>+</td>
                            <td className={mainStyles.additionTableCell}>{numbers[1][0]}</td>
                            <td className={mainStyles.additionTableCell}>{numbers[1][1]}</td>
                            <td className={mainStyles.additionTableCell}>{numbers[1][2]}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className={mainStyles.additionTableCell}>
                                <input
                                    className={mainStyles.additionTableInput}
                                    ref={inputRef}
                                    name={'answer1'}
                                    type={'number'}
                                />
                            </td>
                            <td className={mainStyles.additionTableCell}>
                                <input
                                    className={mainStyles.additionTableInput}
                                    name={'answer2'}
                                    type={'number'}
                                />
                            </td>
                            <td className={mainStyles.additionTableCell}>
                                <input
                                    className={mainStyles.additionTableInput}
                                    name={'answer3'}
                                    type={'number'}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className={mainStyles.linkButton} type={'submit'}>{'Sprawdź'}</button>
                </div>
            </form>
        </div>
    )
}

export default AdditionTwo;
