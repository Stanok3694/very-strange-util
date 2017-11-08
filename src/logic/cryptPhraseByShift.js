import prettifyArrAsStr from './prettifyArrAsStr';
import shiftSymbol from './shiftSymbol';

const cryptPhraseByShift = (phrase, step) => {
    const phraseArr = Array.from(phrase);
    const cryptedArr = phraseArr.map(e => shiftSymbol(e, step));
    const result = prettifyArrAsStr(cryptedArr);
    return result;
}

export default cryptPhraseByShift;