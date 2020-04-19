import { shallow } from "enzyme";
import React from "react";
import { checkProps, findByAttribute } from "../test/testUtils";
import Congrats from "./Congrats";

const defaultProps = { success: false };

/**
 * Faction function to create a ShallowWrapper for the Congrats component.
 *
 * @name setup
 * @function
 * @param {object} props={} Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
};

describe("Congrats", () => {
    test("renders without error", () => {
        const wrapper = setup();
        const component = findByAttribute(wrapper, "component-congrats");
        expect(component.length).toBe(1);
    });

    test("renders no text when `success` props is false", () => {
        const wrapper = setup();
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
