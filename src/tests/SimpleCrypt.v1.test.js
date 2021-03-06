import { 
    cryptPhraseByShift,
    getArrPart, 
    getAverageWordLength,
    prettifyArrAsStr,
    removeSpacesFromPhrase, 
    shiftSymbol, 
} from '../logic';

describe('basic layer functional', () => {

    // ToDo #2: need track non-alphabetical symbols position

    const phraseWithSpace = 'hello world';
    const targetPhrase = 'helloworld';
    const arr = Array.from(targetPhrase);

    const evenPhrase = 'elwrd';
    const evenElements = Array.from(evenPhrase);
    const unevenPhrase = 'hlool';
    const unevenElements = Array.from(unevenPhrase);

    test('phrase with space convert to phrase without space', () => {
        const formattedPhrase = removeSpacesFromPhrase(phraseWithSpace);
        expect(formattedPhrase).toBe(targetPhrase);
    });

    it('should take only even elements', () => {
        const actual = JSON.stringify(getArrPart(arr, 'even'));
        const expected = JSON.stringify(evenElements);
        expect(actual).toBe(expected);
    });

    it('should take only uneven elements', () => {
        const actual = JSON.stringify(getArrPart(arr, 'uneven'));
        const expected = JSON.stringify(unevenElements);
        expect(actual).toBe(expected);
    });

    it('can take arr and move it to plain str', () => {
        const arr = ['a', 'b', 'c', 'd'];
        const expected = "abcd";
        const actual = prettifyArrAsStr(arr);
        expect(actual).toBe(expected);
    });

    it('should works fine with string (even)', () => {
        const targetData = Array.from(targetPhrase);
        const actualArr = getArrPart(targetData, 'even');
        const actual = prettifyArrAsStr(actualArr)
        const expected = prettifyArrAsStr(evenElements);
        expect(actual).toBe(expected);
    });

    it('should works fine with string (uneven)', () => {
        const targetData = Array.from(targetPhrase);
        const actualArr = getArrPart(targetData, 'uneven');
        const actual = prettifyArrAsStr(actualArr);
        const expected = prettifyArrAsStr(unevenElements);
        expect(actual).toBe(expected);
    });

    it('should map phrase part on alphabetical array', () => {
        const prevValue = 'h';
        const step = 3;
        const expected = 'k';
        const actual = shiftSymbol(prevValue, step);
        expect(actual).toBe(expected);
    });

    it('should works with uneven elements arr', () => {
        const step = 3;
        const expected = 'korro';
        const actualArr = unevenElements.map(e => shiftSymbol(e, step));
        const actual = prettifyArrAsStr(actualArr);
        expect(actual).toBe(expected);
    });

    it('should works with even elements arr', () => {
        const step = 3;
        const expected = 'hozug';
        const actualArr = evenElements.map(e => shiftSymbol(e, step));
        const actual = prettifyArrAsStr(actualArr);
        expect(actual).toBe(expected);
    });

    it('return average word length', () => {
        const phrase = "hey you man";
        const expected = 3;
        const actual = getAverageWordLength(phrase);
        expect(actual).toBe(expected);
    });

    test('that shift less than alphabet length', () => {
        const phrase = "himan";
        const step = 3;
        const expected = "klpdq";
        const actual = cryptPhraseByShift(phrase, step);
    });

    test('that shift more than alphabet length', () => {
        const phrase = "himan";
        const step = 31;
        const expected = "klpdq";
        const actual = cryptPhraseByShift(phrase, step);
    });
});