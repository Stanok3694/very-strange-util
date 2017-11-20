import { prettifyArrAsStr } from "./";

const removeSpacesFromPhrase = phrase => {
    const formattedPhrasesArr = phrase.split(' ');
    const formattedPhrase = prettifyArrAsStr(formattedPhrasesArr.toString());
    return formattedPhrase;
}

export default removeSpacesFromPhrase;