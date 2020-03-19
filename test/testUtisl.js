import checkPropTypes from "check-prop-types";

/**
 * Returns node(s) with given data-test attribute.
 *
 * @name findByAttribute
 * @function
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper.
 * @param {string} value Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByAttribute = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
};

/**
 * Verifies if the props passed are of right data-type, component doesn't throw any warning.
 *
 * @name checkProps
 * @function
 * @param {JSX.Element} >component component for which props are to be verified.
 * @param {object} confirmingProps{ props to be confirmed against component.
 */

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.propType,
        confirmingProps,
        "prop",
        component.name
    );
    expect(propError).toBeUndefined();
};
