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
    onRemoved: () => void;
}

const ResultCard:  FC<ResultsProp> = ({
    result, 
    onRemoved
}) => 
{
    const [showInputs, setShowInputs] = useState(false);

    const editResult = () => {
        setShowInputs(true);
    };

    const saveResults = () => {
        setShowInputs(false);
    };
    
    return <>
        { !showInputs && <div className={classes.scores}>
            <div className={classes.score}>{result.homeScore} <Button RightIcon={Minus} secondary/> <Button RightIcon={Plus} secondary /></div>
            <div className={classes.score}>{result.awayScore} <Button RightIcon={Minus} secondary/> <Button RightIcon={Plus} secondary /></div>
            <Button RightIcon={Edit} onClick={editResult}/>
        </div>}
        { showInputs && <div className={classes.editScore}>
            <input value={result.homeScore}></input>
            <input value={result.awayScore}></input>
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
