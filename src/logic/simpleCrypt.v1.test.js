import Pows from './Pows';
import getArrPart from './getArrPart';
import shiftSymbol from './shiftSymbol';

describe('basic layer functional', () => {

    // ToDo #1: should be taken from target string and key, not from hard code
    const x = 0.4;
    const y = 1.25;

    const PowsService = new Pows(x, y);
    
    // ToDo #2: can have spaces - need check it and change mechanism
    const targetPhrase = 'helloworld';
    const arr = Array.from(targetPhrase);
    
    const evenPhrase = 'elwrd';
    const evenElements = Array.from(evenPhrase);
    const unevenPhrase =  'hlool';
    const unevenElements = Array.from(unevenPhrase);
    
    // ToDo #3: probably can move it to class property?
    const alphabeticalStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabeticalArr = Array.from(alphabeticalStr);
        
    it('should calc pow of sum', () => {
        const actual = PowsService.Sum;
        const expected = 2.7225;
        expect(actual).toBe(expected);
    });

    it('should calc pow of residual', () => {
        const actual = PowsService.Residual;
        const expected = 0.7225;
        expect(actual).toBe(expected);
    });

    it('should calc residual of pow', () => {
        const actual = PowsService.ResidualOfPow;
        const expected = -1.4025;
        expect(actual).toBe(expected);
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

    test('that it works fine with string (even)', () => {
        const targetData = Array.from(targetPhrase);
        const actualArr = getArrPart(targetData, 'even');
        
        const actual = actualArr.toString().replace(/,/g, "");
        const expected = evenElements.toString().replace(/,/g, "");
        
        expect(actual).toBe(expected);
    });

    test('that it works fine with string (uneven)', () => {
        const targetData = Array.from(targetPhrase);
        const actualArr = getArrPart(targetData, 'uneven');
        
        const actual = actualArr.toString().replace(/,/g, "");
        const expected = unevenElements.toString().replace(/,/g, "");
        
        expect(actual).toBe(expected);
    });

    it('should map phrase part on alphabetical array', () => {
        const prevValue = 'h';
        const step = 3;
        const expected = 'k';
        const actual = shiftSymbol(prevValue, step, alphabeticalArr);
        expect(actual).toBe(expected);
    });

    test('that it works with uneven elements arr', () => {
        const step = 3;
        const expected = 'korro';
        
        const actualArr = unevenElements.map(e => shiftSymbol(e, step, alphabeticalArr));
        const actual = actualArr.toString().replace(/,/g, "");
        // console.log(actual);
        expect(actual).toBe(expected);
    });

    test('that it works with even elements arr', () => {
        const step = 3;
        const expected = 'hozug';

        const actualArr = evenElements.map(e => shiftSymbol(e, step, alphabeticalArr));
        const actual = actualArr.toString().replace(/,/g, "");
        // console.log(actual);
        expect(actual).toBe(expected);
    });
});