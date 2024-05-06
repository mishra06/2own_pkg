/***********************************************************************************
 * ********************************************************************************
 * Adds two numbers
 * @param {number} x - The first number to be added
 * @param {number} y - The second number to be added
 * @returns {number} The sum of x and y
 ***************************************************************************************
 ****************************************************************************************/

const Add = (x, y) => x + y;


/**
 * Subtracts one number from another
 * @param {number} x - The number to subtract from
 * @param {number} y - The number to subtract
 * @returns {number} The result of subtracting y from x
 */
const subtract = (x, y) => x - y;


/***********************************************************************************
 * ********************************************************************************
 * Multiplies two numbers
 * @param {number} x - The first number to be multiplied
 * @param {number} y - The second number to be multiplied
 * ********************************************************************************
 * ********************************************************************************
 * *********************************************************************************/
const multiply = (x, y) => x * y;

/**
 * Divides one number by another
 * @param {number} x - The dividend
 * @param {number} y - The divisor
 * @returns {number} The result of dividing x by y
 */
const divide = (x, y) => x / y;

const calci = {
  Add,
  subtract,
  multiply,
  divide,
};

module.exports = calci;