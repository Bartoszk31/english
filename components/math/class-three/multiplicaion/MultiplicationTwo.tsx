'use client';

import { useEffect, useRef, useState } from 'react';
import getRandomNumber from '@/lib/getRandomNumber';
import { getStorePoints, setStorePoints } from '@/lib/storePoints';
import mainStyles from '@/app/main.module.css';

const MultiplicationTwo = () => {
    const storageKey = 'c3_m_m2'
    const [points, setPoints] = useState(0);
    const [answerInfo, setAnswerInfo] = useState('');

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [firstVisible, setFirstVisible] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    const setNumbers = () => {
        setFirstNumber(getRandomNumber(0, 9));
        setSecondNumber(getRandomNumber(0, 9));
        const rand = getRandomNumber(1,10);
        setFirstVisible(rand < 6);
        inputRef?.current?.focus();
    }

    const checkAnswer = (formData: FormData) => {
        const answer = Number(formData.get('answer'));

        if (firstNumber * answer === firstNumber * secondNumber) {
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
                    {firstVisible ? (
                        <>
                            <span className={mainStyles.text}>{firstNumber} x </span>
                            <input className={mainStyles.inputAnswer} ref={inputRef} name={'answer'} type={'number'}/>
                        </>
                    ) : (
                        <>
                            <input className={mainStyles.inputAnswer} ref={inputRef} name={'answer'} type={'number'}/>
                            <span className={mainStyles.text}> x {firstNumber}</span>
                        </>
                    )}
                    <span className={mainStyles.text}> = {firstNumber*secondNumber}</span>
                </div>
                <div>
                    <button className={mainStyles.linkButton} type={'submit'}>{'Sprawdź'}</button>
                </div>
            </form>
        </div>
    )
}

export default MultiplicationTwo;
