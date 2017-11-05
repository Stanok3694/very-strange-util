import roundUpResult from './roundUpResult';

export default class Pows {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    powOfSum = () => roundUpResult(Math.pow(this.x, 2) + 2*this.x*this.y + Math.pow(this.y, 2));
    powOfResidual = () => roundUpResult(Math.pow(this.x, 2) - 2*this.x*this.y + Math.pow(this.y, 2));
    residualOfPow = () => roundUpResult((this.x-this.y)*(this.x+this.y));
}