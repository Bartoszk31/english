'use client';

import { useEffect, useState } from 'react';
import styles from './words.module.css';

function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const wordsSets = [
    [
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
    ],
    [
        { img: 'u02-p01', word: 'teeth' },
        { img: 'u02-p02', word: 'tail' },
        { img: 'u02-p03', word: 'claws' },
        { img: 'u02-p04', word: 'feathers' },
        { img: 'u02-p05', word: 'whiskers' },
        { img: 'u02-p06', word: 'wings' },
        { img: 'u02-p07', word: 'shell' },
        { img: 'u02-p08', word: 'fur' },
        { img: 'u02-p09', word: 'beak' },
        { img: 'u02-p10', word: 'scales' },
        { img: 'u02-p11', word: 'mammals' },
        { img: 'u02-p12', word: 'reptiles' },
        { img: 'u02-p13', word: 'amphibians' },
        { img: 'u02-p14', word: 'birds' },
        { img: 'u02-p15', word: 'fish' },
    ],
    [
        { img: 'u03-p01', word: 'fruit juice' },
        { img: 'u03-p02', word: 'water' },
        { img: 'u03-p03', word: 'sandwiches' },
        { img: 'u03-p04', word: 'chicken' },
        { img: 'u03-p05', word: 'salad' },
        { img: 'u03-p06', word: 'yoghurt' },
        { img: 'u03-p07', word: 'crisps' },
        { img: 'u03-p08', word: 'chocolate' },
        { img: 'u03-p09', word: 'strawberries' },
        { img: 'u03-p10', word: 'ice cream' },
        { img: 'u03-p11', word: 'sweet' },
        { img: 'u03-p12', word: 'salty' },
        { img: 'u03-p13', word: 'sour' },
        { img: 'u03-p14', word: 'bitter' },
    ],
    [
        { img: 'u04-p01', word: 'get up' },
        { img: 'u04-p02', word: 'have breakfast' },
        { img: 'u04-p03', word: 'brush your teeth' },
        { img: 'u04-p04', word: 'go to school' },
        { img: 'u04-p05', word: 'have lunch' },
        { img: 'u04-p06', word: 'go home' },
        { img: 'u04-p07', word: 'have dinner' },
        { img: 'u04-p08', word: 'have a shower' },
        { img: 'u04-p09', word: 'put on your pyjamas' },
        { img: 'u04-p10', word: 'go to bed' },
        { img: 'u04-p11', word: 'in the morning' },
        { img: 'u04-p12', word: 'at midday' },
        { img: 'u04-p13', word: 'in the afternoon' },
        { img: 'u04-p14', word: 'in the evening' },
        { img: 'u04-p15', word: 'at night' },
        { img: 'u04-p16', word: 'at midnight' },
    ],
    [
        { img: 'u05-p01', word: 'dive' },
        { img: 'u05-p02', word: 'row' },
        { img: 'u05-p03', word: 'pla table tennis' },
        { img: 'u05-p04', word: 'do judo' },
        { img: 'u05-p05', word: 'do karate' },
        { img: 'u05-p06', word: 'ride a bike' },
        { img: 'u05-p07', word: 'ride a horse' },
        { img: 'u05-p08', word: 'skateboard' },
        { img: 'u05-p09', word: 'rollerblade' },
        { img: 'u05-p10', word: 'ice-skate' },
        { img: 'u05-p11', word: 'do squats' },
        { img: 'u05-p12', word: 'do press-ups' },
        { img: 'u05-p13', word: 'walk on the spot' },
        { img: 'u05-p14', word: 'run on the spot' },
        { img: 'u05-p15', word: 'stretch' },
    ],
    [
        { img: 'u06-p01', word: 'collecting shells' },
        { img: 'u06-p02', word: 'making a sandcastle' },
        { img: 'u06-p03', word: 'playing volleyball' },
        { img: 'u06-p04', word: 'playing Frisbee' },
        { img: 'u06-p05', word: 'playing badminton' },
        { img: 'u06-p06', word: 'swimming' },
        { img: 'u06-p07', word: 'fishing' },
        { img: 'u06-p08', word: 'snorkelling' },
        { img: 'u06-p09', word: 'putting on suncream' },
        { img: 'u06-p10', word: 'flying a kite' },
        { img: 'u06-p11', word: 'starfish' },
        { img: 'u06-p12', word: 'snail' },
        { img: 'u06-p13', word: 'jellyfish' },
        { img: 'u06-p14', word: 'seahorse' },
        { img: 'u06-p15', word: 'crab' },
    ],
];

type WordsType = {
    unitId: number
}

const Words = ({ unitId }: WordsType) => {
    const words = wordsSets[unitId - 1];
    const [points, setPoints] = useState(0);
    const [word, setWord] = useState<{ img: string, word: string }>();
    const [answerInfo, setAnswerInfo] = useState('');
    const [answers, setAnswers] = useState<{ img: string, word: string }[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);


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

    useEffect(() => {
        chooseWord();
    }, []);

    const handleClick = (id: string) => () => {
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
