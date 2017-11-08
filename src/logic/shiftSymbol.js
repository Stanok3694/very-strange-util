import Alphabet from './Alphabet';

const shiftSymbol = (prevValue, step) => {
    const findIndex = Alphabet.arr.indexOf(prevValue);
    const targetValueIndex = findIndex + step;
    return Alphabet.arr[targetValueIndex];    
};

export default shiftSymbol;