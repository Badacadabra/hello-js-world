var op = require('../lib/Arithmetic');

beforeAll(function () {
    console.log("Start calculations");
});

beforeEach(function () {
    console.log("Calculate...");
});

describe('Arithmetic test suite', function () {
    it('gives correct results for addition', function () {
        expect(op.addition(1, 2)).toBe(3);
        expect(op.addition(3, 'test')).toBeTruthy();
        expect(function () { op.addition('foo', 'bar') }).not.toThrowError();
    });

    it('gives correct results for subtraction', function () {
        expect(op.subtraction(3, 1)).toBe(2);
        expect(op.subtraction(1, 'test')).toBeFalsy();
        expect(op.subtraction('foo', 'bar')).toBeNaN();
    });

    it('gives correct results for multiplication', function () {
        expect(op.multiplication(6, 7)).toBe(42);
        expect(op.multiplication(0, 42)).toBeFalsy();
        expect(op.multiplication(-1, 9)).toBeLessThan(0);
    });

    it('gives correct results for division', function () {
        expect(function () { op.division(4, 0) }).toThrowError();
        expect(op.division(10, 2)).toBe(5);
        expect(op.division(4, 2)).toBeGreaterThan(1);
    });
});

afterEach(function () {
    console.log("Go on...");
});

afterAll(function () {
    console.log("End calculations");
});
