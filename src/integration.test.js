import { guessWord } from "./actions";
import { storeFactory } from "./test/testUtisl";

describe("guessWord action dispatcher", () => {
    describe("no guessed words", () => {
        const secretWord = "party";
        const unsuccessfulWord = "train";

        let store;

        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test("updates state correctly for unsuccessful guess", () => {
            store.dispatch(guessWord(unsuccessfulWord));
            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [
                    { guessedWord: unsuccessfulWord, letterMatchCount: 3 }
                ]
            };

            expect(newState).toEqual(expectedState);
        });

        test("updates state correctly for successful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };
            expect(newState).toEqual(expectedState);
        });
    });

    describe("some words guessed", () => {
        const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
        const secretWord = "party";
        const unsuccessfulGuess = "train";

        const initialState = {
            guessedWords,
            secretWord
        };

        let store;

        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test("updates state correctly for unsuccessful guess", () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();

            const expectedState = {
                secretWord: initialState.secretWord,
                guessedWords: [
                    ...initialState.guessedWords,
                    { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
                ],
                success: false
            };
            expect(newState).toEqual(expectedState);
        });

        test("updates state correctly for successful guess", () => {
            store.dispatch(guessWord(initialState.secretWord));
            const newState = store.getState();

            const expectedState = {
                secretWord: initialState.secretWord,
                guessedWords: [
                    ...initialState.guessedWords,
                    {
                        guessedWord: initialState.secretWord,
                        letterMatchCount: 5
                    }
                ],
                success: true
            };
            expect(newState).toEqual(expectedState);
        });
    });
});
