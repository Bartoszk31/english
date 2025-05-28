'use client';

import { useEffect, useRef, useState } from 'react';
import getRandomNumber from '@/lib/getRandomNumber';
import { getStorePoints, setStorePoints } from '@/lib/storePoints';
import mainStyles from '@/app/main.module.css';

const MultiplicationOne = () => {
    const storageKey = 'c3_m_m1'
    const [points, setPoints] = useState(0);
    const [answerInfo, setAnswerInfo] = useState('');

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const setNumbers = () => {
        setFirstNumber(getRandomNumber(0, 9));
        setSecondNumber(getRandomNumber(0, 9));
        inputRef?.current?.focus();
    }

    const checkAnswer = (formData: FormData) => {
        const answer1 = Number(formData.get('answer1'));
        const answer2 = Number(formData.get('answer2'));

        if (firstNumber * secondNumber === answer1 * answer2) {
            const newPoints = points+1;
            setPoints(newPoints);
            setStorePoints(storageKey, newPoints);
            setAnswerInfo('Dobrze');
        } else {
            const newPoints = (points - 1) < 0 ? 0 : (points - 1);
            setPoints(newPoints);
            setStorePoints(storageKey, newPoints);
            setAnswerInfo('Źle');
        }

        setNumbers();
    }

    useEffect(() => {
        setPoints(getStorePoints(storageKey));
        setNumbers();
    }, []);

    return (
        <div>
            <div className={mainStyles.pointsContainer}>
                {'Punkty: '}{points}{' - '}{answerInfo}
            </div>
            <form action={checkAnswer}>
                <div className={mainStyles.textContainer}>
                    <span className={mainStyles.text}>{firstNumber * secondNumber} = </span>
                    <input className={mainStyles.inputAnswer} ref={inputRef} name={'answer1'} type={'number'}/>
                    {' x '}
                    <input className={mainStyles.inputAnswer} name={'answer2'} type={'number'}/>
                </div>
                <div>
                    <button className={mainStyles.linkButton} type={'submit'}>{'Sprawdź'}</button>
                </div>
            </form>
        </div>
    )
}

export default MultiplicationOne;
