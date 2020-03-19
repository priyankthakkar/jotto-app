import { shallow } from "enzyme";
import React from "react";
import GuessedWords from "./GuessedWords";
import { checkProps, findByAttribute } from "../test/testUtisl";

const defaultProps = {
    guessedWords: [
        {
            guessedWord: "train",
            letterMatchCount: 3
        }
    ]
};

/**
 * Factory function to create ShallowWrapper for the GuessedWords component.
 *
 * @name setup
 * @function
 * @param {object} props={} Component specific props to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };

    return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test("renders without error", () => {
        const component = findByAttribute(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });

    test("renders instruction to guess the word", () => {
        const instruction = findByAttribute(wrapper, "guess-instruction");
        expect(instruction.text().length).not.toBe(0);
    });
});
