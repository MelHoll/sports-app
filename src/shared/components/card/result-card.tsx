import { FC, useState } from 'react';
import Button from 'components/button';
import Edit from 'assets/svg/edit.svg?react';
import Plus from 'assets/svg/plus.svg?react';
import Minus from 'assets/svg/minus.svg?react';
import Trash from 'assets/svg/trash.svg?react';
import { GameResult } from 'src/models/Match';
import classes from './styles.module.scss'

interface ResultsProp {
    result: GameResult;
    onUpdate: (result: GameResult) => Promise<GameResult>;
    onRemoved: () => void;
}

const ResultCard:  FC<ResultsProp> = ({
    result: initialResult, 
    onUpdate,
    onRemoved
}) => 
{
    const [showInputs, setShowInputs] = useState(false);
    const [result, setResult] = useState(initialResult);

    const editResult = () => {
        setShowInputs(true);
    };

    const saveResults = () => {
        setShowInputs(false);
        onUpdate?.(result);
    };

    const incrementResults = (prop: string, change: number) => {
        const updateResult = {...result};
        updateResult[prop as keyof typeof updateResult] += change;
        onUpdate?.(updateResult).then(()=> {
            setResult(updateResult);
        });
    }

    const updateResults = (prop: string, value: number) => {
        const updateResult = {...result};
        updateResult[prop as keyof typeof updateResult] = value;
        setResult(updateResult);
    }
    
    return <>
        { !showInputs && <div className={classes.scores}>
            <div className={classes.score}>
                {result.homeScore} 
                <Button RightIcon={Minus} secondary onClick={() => incrementResults('homeScore', -1)}/> 
                <Button RightIcon={Plus} secondary  onClick={() => incrementResults('homeScore', 1)}/>
            </div>
            <div className={classes.score}>
                {result.awayScore} 
                <Button RightIcon={Minus} secondary onClick={() => incrementResults('awayScore', -1)}/> 
                <Button RightIcon={Plus} secondary  onClick={() => incrementResults('awayScore', 1)}/>
            </div>
            <Button RightIcon={Edit} onClick={editResult}/>
        </div>}
        { showInputs && <div className={classes.editScore}>
            <input type={'number'} step={1} value={result.homeScore} onChange={(e) => updateResults('homeScore', parseInt(e.target.value))}/>
            <input type={'number'} step={1} value={result.awayScore} onChange={(e) => updateResults('awayScore', parseInt(e.target.value))}/>
            <Button label={"Save score"} onClick={saveResults}/>
            <Button RightIcon={Trash}
                onClick={() => {
                setShowInputs(false);
                onRemoved();
            }}/>
        </div>}
    </>;
}

ResultCard.displayName = 'ResultCard';

export default ResultCard;
