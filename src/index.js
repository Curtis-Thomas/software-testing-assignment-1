import { divide } from './calculator.js';

try {
    let result = divide(2, 1);
    console.log(result);
    console.log(typeof(NaN));
} catch (error) {
    console.error(error.message);
}