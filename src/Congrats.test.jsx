import Enzyme, { shallow } from "enzyme";
import EnzymeAdapater from "enzyme-adapter-react-16";
import React from "react";
import { findByAttribute } from "../test/testUtisl";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapater() });

/**
 * Faction function to create a ShallowWrapper for the Congrats component.
 *
 * @name setup
 * @function
 * @param {object} props={} Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
    return shallow(<Congrats {...props} />);
};

describe("Congrats", () => {
    test("renders without error", () => {
        const wrapper = setup();
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
});
