import { shallow } from "enzyme";
import React from "react";
import NewWord from "./NewWord";
import { findByAttribute, storeFactory } from "./test/testUtisl";

const setup = state => {
    const store = storeFactory(state);
    const wrapper = shallow(<NewWord store={store} />)
        .dive()
        .dive(); 
    return wrapper;
};

describe("NewWord", () => {
    describe("when `success` is false", () => {
        let wrapper;

        beforeEach(() => {
            const initialState = {
                success: false
            };
            wrapper = setup(initialState);
        });

        test("renders without error", () => {
            const component = findByAttribute(wrapper, "component-new-word");
            expect(component.length).toBe(0);
        });

        test("has a button to fetch new word", () => {
            const newWordButton = findByAttribute(wrapper, "new-word-button");
            expect(newWordButton.length).toBe(0);
        });
    });

    describe("when `success` is true", () => {
        let wrapper;

        beforeEach(() => {
            const initialState = {
                success: true
            };
            wrapper = setup(initialState);
        });

        test("renders without error", () => {
            const component = findByAttribute(wrapper, "component-new-word");
            expect(component.length).toBe(1);
        });

        test("has a button to fetch new word", () => {
            const newWordButton = findByAttribute(wrapper, "new-word-button");
            expect(newWordButton.length).toBe(1);
        });
    });
});

describe("redux props", () => {
    let wrapper;

    beforeEach(() => {
        const initialState = {
            success: true
        };

        wrapper = setup(initialState);
    });

    test("has `success` piece of state as props", () => {
        console.log(wrapper.debug());
        console.log(wrapper.instance());
    });
});
