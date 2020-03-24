import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import { storeFactory } from "./test/testUtisl";

/**
 * Factory function for creating App component.
 *
 * @name setup
 * @function
 * @param {ReduxStore} redux store with given state
 * @returns {ShallowWrapper}
 */

const setup = store => {
    const wrapper = shallow(<App store={store} />)
        .dive()
        .dive();
    return wrapper;
};

describe("redux props for App compoent", () => {
    let wrapper;

    beforeEach(() => {
        const store = storeFactory({
            success: false,
            guessedWords: [],
            secretWord: "party"
        });
        wrapper = setup(store);
    });

    test("has success piece of state as prop", () => {
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBeFalsy();
    });

    test("guessedWords is a redux prop", () => {
        const guessedWordsProps = wrapper.instance().props.guessedWords;
        expect(guessedWordsProps.length).toBe(0);
    });

    test("`getSecretWord` action creator is a function on the props", () => {
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});
