describe('basic layer functional', () => {
    const x = 0.4;
    const y = 1.25;
    const arr = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'];

    const powOfSum = (x, y) => roundUpResult(Math.pow(x, 2) + 2*x*y + Math.pow(y, 2));
    const powOfResidual = (x, y) => roundUpResult(Math.pow(x, 2) - 2*x*y + Math.pow(y, 2));
    const residualOfPow = (x, y) => roundUpResult((x-y)*(x+y));
    const roundUpResult = result => {
        const roundUpResult = result.toFixed(4);
        return Number(roundUpResult);     
    }
    const getArrPart = (arr, which) => {
        return (
            which === 'even' 
                ? arr.filter((e, i) => (i + 1) % 2 === 0)
                : arr.filter((e, i) => i % 2 === 0)
        );  
    }

    it('should calc pow of sum', () => {
        const actual = powOfSum(x, y);
        const expected = 2.7225;
        expect(actual).toBe(expected);
    });

    it('should calc pow of residual', () => {
        const actual = powOfResidual(x, y);
        const expected = 0.7225;
        expect(actual).toBe(expected);
    });

    it('should calc residual of pow', () => {
        const actual = residualOfPow(x, y);
        const expected = -1.4025;
        expect(actual).toBe(expected);
    });
    
    it('should take only even elements', () => {
        const actual = JSON.stringify(getArrPart(arr, 'even'));
        const expected = JSON.stringify(['e', 'l', 'w', 'r', 'd']);
        expect(actual).toBe(expected);
    });

    it('should take only uneven elements', () => {
        const actual = JSON.stringify(getArrPart(arr, 'uneven'));
        const expected = JSON.stringify(['h', 'l', 'o', 'o', 'l']);
        expect(actual).toBe(expected);
    });
});