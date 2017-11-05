describe('basic layer functional', () => {
    const x = 0.4;
    const y = 1.25;

    const powOfSum = (x, y) => roundUpResult(Math.pow(x, 2) + 2*x*y + Math.pow(y, 2));
    const powOfResidual = (x, y) => roundUpResult(Math.pow(x, 2) - 2*x*y + Math.pow(y, 2));
    const residualOfPow = (x, y) => roundUpResult((x-y)*(x+y));
    const roundUpResult = (result) => {
        const roundUpResult = result.toFixed(4);
        return Number(roundUpResult);     
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
});