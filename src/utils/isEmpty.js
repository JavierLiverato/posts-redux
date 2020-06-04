/**
 * isEmpty constant function (verify if value is undefined, null, void string, or void array)
 *  
 * @export constant
 * @param {*} value
 * @returns boolean
 */
const isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

export default isEmpty;