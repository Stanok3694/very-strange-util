const shiftSymbol = (prevValue, step, alphabeticalArr) => {
    const findIndex = alphabeticalArr.indexOf(prevValue);
    const targetValueIndex = findIndex + step;
    return alphabeticalArr[targetValueIndex];    
};

export default shiftSymbol;