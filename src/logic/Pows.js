import roundUpResult from './roundUpResult';

export default class Pows {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get Sum () {
        return this.powOfSum(this.x, this.y);
    }

    get Residual () {
        return this.powOfResidual(this.x, this.y);
    }

    get ResidualOfPow () {
        return this.residualOfPow(this.x, this.y);
    }

    powOfSum = (x, y) => roundUpResult(Math.pow(x, 2) + 2*x*y + Math.pow(y, 2));
    powOfResidual = (x, y) => roundUpResult(Math.pow(x, 2) - 2*x*y + Math.pow(y, 2));
    residualOfPow = (x, y) => roundUpResult((x-y)*(x+y));
}