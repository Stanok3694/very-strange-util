import { Alphabet } from '../entities';

const shiftSymbol = (prevValue, step) => {
    const findIndex = Alphabet.Arr.indexOf(prevValue);
    const targetValueIndex = findIndex + step;
    return Alphabet.Arr[targetValueIndex];    
};

export default shiftSymbol;