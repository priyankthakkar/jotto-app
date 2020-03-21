import checkPropTypes from "check-prop-types";
import {createStore} from "redux";
import rootReducer from "../reducers";

/**
 * Create a testing store with imported reducers, middleware and initial state.
 *
 * @name storeFactory
 * @function
 * @param {object} intialState Initial state of the store.
 * @returns {Store} Redux store.
 */

export const storeFactory = intialState => {
    return createStore(rootReducer, intialState);
};

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
