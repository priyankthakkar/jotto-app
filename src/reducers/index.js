import { combineReducers } from "redux";
import guessedWords from "./guessedWordReducer";
import secretWord from "./secretWordReducer";
import success from "./successReducer";

const rootReducer = combineReducers({
    success,
    guessedWords,
    secretWord
});

export default rootReducer;
