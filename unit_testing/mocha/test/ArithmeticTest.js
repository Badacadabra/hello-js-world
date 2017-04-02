var op = require('../src/Arithmetic'),
    assert = require('chai').assert;

suiteSetup(function () {
    console.log("Start calculations");
});

setup(function () {
    console.log("Calculate...");
});

suite('Airthmetic test suite', function () {
    test('gives correct results for addition', function () {
        assert.equal(op.addition(1, 2), 3);
        assert.isOk(op.addition(3, 'test'));
        assert.doesNotThrow(function () { op.addition('foo', 'bar') });
    });

    test('gives correct results for subtraction', function () {
        assert.equal(op.subtraction(3, 1), 2);
        assert.isNotOk(op.subtraction(1, 'test'));
        assert.isNaN(op.subtraction('foo', 'bar'));
    });

    test('gives correct results for multiplication', function () {
        assert.equal(op.multiplication(6, 7), 42);
        assert.isNotOk(op.multiplication(0, 42));
        assert.isBelow(op.multiplication(-1, 9), 0);
    });

    test('gives correct results for division', function () {
        assert.throws(function () { op.division(4, 0)});
        assert.equal(op.division(10, 2), 5);
        assert.isAbove(op.division(4, 2), 1);
    });
});

teardown(function () {
    console.log("Go on...");
});

suiteTeardown(function () {
    console.log("End calculations");
});
