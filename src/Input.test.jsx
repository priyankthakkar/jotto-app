import { shallow } from "enzyme";
import React from "react";
import Input from "./Input";
import { findByAttribute, storeFactory } from "./test/testUtisl";

/**
 * Factory function to create a ShallowWrapper for the Input component.
 *
 * @name setup
 * @function
 * @param {object} initialState={} Initial state for this setup.
 * @returns {ShallowWrapper}
 */

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();
    return wrapper;
};

describe("render", () => {
    describe("word has not been guessed", () => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });

        test("renders component without error", () => {
            const component = findByAttribute(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test("renders input box", () => {
            const inputBox = findByAttribute(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });

        test("renders submit button", () => {
            const inputButton = findByAttribute(wrapper, "submit-button");
            expect(inputButton.length).toBe(1);
        });
    });

    describe("word has been guessed", () => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });

        test("renders component without error", () => {
            const component = findByAttribute(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test("does not render input box", () => {
            const inputBox = findByAttribute(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });

        test("does not render submit button", () => {
            const submitButton = findByAttribute(wrapper, "submit-button");
            expect(submitButton.length).toBe(0);
        });
    });
});

describe("redux props", () => {
    test("has success piece of state as prop", () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    test("`guessWord` action creator is a function props", () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});
