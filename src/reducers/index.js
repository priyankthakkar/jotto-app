import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWords from "./guessedWordReducer";

const rootReducer = combineReducers({
    success,
    guessedWords
});

export default rootReducer;
