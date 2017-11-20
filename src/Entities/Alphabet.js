class AlphabetEntity {
    constructor () {
        this.Alphabet = 'abcdefghijklmnopqrstuvwxyz';
    }

    get Str () {
       return this.Alphabet; 
    }

    get Arr () {
        return Array.from(this.Alphabet);
    }

    get Length () {
        return this.Arr.length;
    }
} 

const Alphabet = new AlphabetEntity();

export default Alphabet;