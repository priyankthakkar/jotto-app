import { shallow } from "enzyme";
import React from "react";
import Input from "./Input";
import { storeFactory } from "./test/testUtisl";

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
        test("renders component without error", () => {
            setup();
        });

        test("renders input box", () => {});

        test("renders submit button", () => {});
    });

    describe("word has been guessed", () => {
        test("renders component without error", () => {});

        test("does not render input box", () => {});

        test("does not render submit button", () => {});
    });
});
