import { mount } from "enzyme";
import React from "react";
import { checkProps, findByAttribute } from "../test/testUtils";
import Congrats from "./Congrats";
import languageContext from "./contexts/languageContext";

const defaultProps = { success: false };

/**
 * Faction function to create a ShallowWrapper for the Congrats component.
 *
 * @name setup
 * @function
 * @param {object} - testValues - context values specific  to the Congrats component.
 * @returns {ReactWrapper}
 */

const setup = ({ success, language }) => {
    language = language || "en";
    return mount(
        <languageContext.Provider value={language}>
            <Congrats success={success} />
        </languageContext.Provider>
    );
};

describe("languageContext", () => {
    test("correctly remembers congrats string in english", () => {
        const wrapper = setup({ success: true });
        expect(wrapper.text()).toBe("Congratulations! You guessed the word!");
    });

    test("correctly remembers congrats string in emoji", () => {
        const wrapper = setup({ success: true, language: "emoji" });
        expect(wrapper.text()).toBe("🎯🎉");
    });
});

describe("Congrats", () => {
    test("renders without error", () => {
        const wrapper = setup({ success: false });
        const component = findByAttribute(wrapper, "component-congrats");
        expect(component.length).toBe(1);
    });

    test("renders no text when `success` props is false", () => {
        const wrapper = setup({ success: false });
        const component = findByAttribute(wrapper, "component-congrats");
        expect(component.text()).toBe("");
    });

    test("renders non-empty congrats message when `success` props is true", () => {
        const wrapper = setup({ success: true });
        const component = findByAttribute(wrapper, "congrats-message");
        expect(component.text().length).not.toBe(0);
    });

    test("renders no wraning when right props are passed", () => {
        checkProps(Congrats, defaultProps);
    });
});
