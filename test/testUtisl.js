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
