import { divide } from '../src/calculator.js';

describe('Division Functionality', () => {
    
    test('should return 5 when 10 is divided by 2', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('should throw TypeError when input is a string', () => {
        expect(() => divide("10", 2)).toThrow("Both arguments must be numbers");
    });


    test('should throw TypeError when input is NaN', () => {
        expect(() => divide(NaN, 5)).toThrow("Arguments cannot be NaN");
    });

 
    test('should throw RangeError when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
    });


    test('should throw TypeError when the divisor is null', () => {
        expect(() => divide(10, null)).toThrow("Both arguments must be numbers");
    });
});