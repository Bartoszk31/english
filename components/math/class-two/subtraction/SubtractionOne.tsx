'use client';

import { useEffect, useRef, useState } from 'react';
import getRandomNumber from '@/lib/getRandomNumber';
import { getStorePoints, setStorePoints } from '@/lib/storePoints';
import mainStyles from '@/app/main.module.css';

const SubtractionOne = () => {
    const storageKey = 'c2_m_s1'
    const [points, setPoints] = useState(0);
    const [answerInfo, setAnswerInfo] = useState('');

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const setNumbers = () => {
        const a = getRandomNumber(1, 20);
        const b = getRandomNumber(1, 20);

        setFirstNumber(a > b ? a : b);
        setSecondNumber(a > b ? b : a);
        inputRef?.current?.focus();
    }

    const checkAnswer = (formData: FormData) => {
        const answer = Number(formData.get('answer'));

        if (firstNumber - secondNumber === answer) {
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
                    <span className={mainStyles.text}>{firstNumber} - {secondNumber} = </span>
                    <input className={mainStyles.inputAnswer} ref={inputRef} name={'answer'} type={'number'}/>
                </div>
                <div>
                    <button className={mainStyles.linkButton} type={'submit'}>{'Sprawdź'}</button>
                </div>
            </form>
        </div>
    )
}

export default SubtractionOne;
