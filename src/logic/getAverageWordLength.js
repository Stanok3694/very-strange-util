const getAverageWordLength = phrase => {
    const phraseArr = phrase.split(/[ ,]+/);
    const elementsCount = phraseArr.length;
    const elementsLength = phraseArr.map(e => e.length);
    const summaryElementsLength = elementsLength.reduce((sum, value) => sum+value);
    const averageElementLength = summaryElementsLength / elementsCount;
    return averageElementLength;
};

export default getAverageWordLength;