'use client';

import { useEffect, useState } from 'react';
import styles from './words.module.css';

function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Words = () => {
    const [points, setPoints] = useState(0);
    const [word, setWord] = useState<{ img: string, word: string }>();
    const [answerInfo, setAnswerInfo] = useState('');
    const [answers, setAnswers] = useState<{ img: string, word: string }[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = [
        { img: 'u01-p01', word: 'play games' },
        { img: 'u01-p02', word: 'listen to music' },
        { img: 'u01-p03', word: 'watch films' },
        { img: 'u01-p04', word: 'use a computer' },
        { img: 'u01-p05', word: 'go on excursions' },
        { img: 'u01-p06', word: 'take photos' },
        { img: 'u01-p07', word: 'help people' },
        { img: 'u01-p08', word: 'paint pictures' },
        { img: 'u01-p09', word: 'make things' },
        { img: 'u01-p10', word: 'do sports' },
        { img: 'u01-p11', word: 'play online games' },
        { img: 'u01-p12', word: 'write emails' },
        { img: 'u01-p13', word: 'watch music videos' },
        { img: 'u01-p14', word: 'write for a class blog' },
        { img: 'u01-p15', word: 'do projects' },
        { img: 'u01-p16', word: 'find out information' },
    ];

    useEffect(() => {
        chooseWord();
    }, []);

    const chooseWord = () => {
        const getRandomWordIndex = () => {
            const randomWordIndex = randomIntFromInterval(0, words.length - 1);

            if (randomWordIndex === currentWordIndex) {
                getRandomWordIndex();
            }

            setCurrentWordIndex(randomWordIndex);

            return randomWordIndex;
        }

        const wordIndex = getRandomWordIndex();

        setWord(words[wordIndex]);

        const answersIndexes = [wordIndex];

        const addRandomIndex = () => {
            if (answersIndexes.length < 4) {
                console.log('mniej niż cztery')
                const randomIndex = randomIntFromInterval(0, words.length - 1);
                if (answersIndexes.includes(randomIndex)) {
                    addRandomIndex();
                } else {
                    answersIndexes.push(randomIndex);
                    addRandomIndex();
                }
            } else {
                console.log(answersIndexes);
                const shuffledIndexes = answersIndexes.sort(() => Math.random() - 0.5);
                const answers = shuffledIndexes.map(i => words[i]);
                setAnswers(answers);
            }
        }

        addRandomIndex();

    }

    const handleClick = (id) => () => {
        if (word?.img === id) {
            setPoints(points+1);
            setAnswerInfo('Dobrze');
        } else {
            const newPoints = points - 1;
            setPoints(newPoints < 0 ? 0 : newPoints);
            setAnswerInfo('Źle');
        }

        chooseWord();
    }

    return (
        <div>
            <div className={styles.pointsContainer}>
                {'Punkty: '}{points}{' - '}{answerInfo}
            </div>
            <div>
                <img src={`/${word?.img}.png`} alt={''} />
            </div>
            <div className={styles.wordsContainer}>
                {answers.map(w => (
                    <span
                        className={styles.wordSpan}
                        key={w.img}
                        onClick={handleClick(w.img)}
                    >
                        {w.word}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Words;
