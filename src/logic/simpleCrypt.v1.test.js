import Pows from './Pows';
import getArrPart from './getArrPart';

describe('basic layer functional', () => {
    const x = 0.4;
    const y = 1.25;
    const PowsService = new Pows(x, y);
    
    const arr = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'];
    const evenElements = ['e', 'l', 'w', 'r', 'd'];
    const unevenElements = ['h', 'l', 'o', 'o', 'l'];
    const str = 'helloworld';

    it('should calc pow of sum', () => {
        const actual = PowsService.powOfSum();
        const expected = 2.7225;
        expect(actual).toBe(expected);
    });

    it('should calc pow of residual', () => {
        const actual = PowsService.powOfResidual();
        const expected = 0.7225;
        expect(actual).toBe(expected);
    });

    it('should calc residual of pow', () => {
        const actual = PowsService.residualOfPow();
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
        const targetData = Array.from(str);
        const actual = JSON.stringify(getArrPart(targetData, 'even'));
        const expected = JSON.stringify(evenElements);
        expect(actual).toBe(expected);
    });

    test('that it works fine with string (uneven)', () => {
        const targetData = Array.from(str);
        const actual = JSON.stringify(getArrPart(targetData, 'uneven'));
        const expected = JSON.stringify(unevenElements);
        expect(actual).toBe(expected);
    });
});