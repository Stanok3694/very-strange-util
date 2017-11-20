import prettifyArrAsStr from './prettifyArrAsStr';
import shiftSymbol from './shiftSymbol';
import { Alphabet } from '../entities';

const cryptPhraseByShift = (phrase, step) => {
    const phraseArr = Array.from(phrase);

    let shiftStep = step;

    if (shiftStep > Alphabet.Length) {
        return shiftStep = shiftStep % Alphabet.Length        
    }

    const cryptedArr = phraseArr.map(e => shiftSymbol(e, shiftStep));
    const result = prettifyArrAsStr(cryptedArr);
    return result;
}

export default cryptPhraseByShift;