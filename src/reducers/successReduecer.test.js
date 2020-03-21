import {actionType} from "../actions";
import successReducer from "./successReducer";

describe("successReducer", () => {
    test("should return state as `false` when no action is passed", () => {
        const newState = successReducer();
        expect(newState).toBe(false);
    });

    test("should return state as `true` when action of type `CORRECT_GUESS` is received", () => {
        const newState = successReducer(undefined, {
            type: actionType.CORRECT_GUESS
        });
        expect(newState).toBe(true);
    });
});
