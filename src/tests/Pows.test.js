import { Pows } from '../entities';

// ToDo #1: should be taken from target string and key, not from hard code    

const x = 0.4;
const y = 1.25;

const PowsService = new Pows(x, y);

describe('', () => {
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
});