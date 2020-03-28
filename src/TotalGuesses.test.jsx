import { shallow } from "enzyme";
import React from "react";
import { findByAttribute } from "./test/testUtisl";
import TotalGuesses from "./TotalGuesses";

/**
 * Factory function to shallow render TotalGuesses component.
 *
 * @name setup
 * @function
 * @param {object} props props to render the component.
 * @returns {ShallowWrapper}
 */

const setup = props => {
    const wrapper = shallow(<TotalGuesses {...props} />);
    return wrapper;
};

describe("TotalGuesses", () => {
    let wrapper;

    const props = {
        length: 3
    };

    beforeEach(() => {
        wrapper = setup(props);
    });

    test("renders without error", () => {
        const component = findByAttribute(wrapper, "component-total-guesses");
        expect(component.length).toBe(1);
    });

    test("display total number of words guessed by user", () => {
        const totalGuesses = findByAttribute(wrapper, "total-guessed-words");
        expect(totalGuesses.text()).toContain(`Total Guesses: ${props.length}`);
    });
});
