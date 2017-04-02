var op = require('../src/Arithmetic');

QUnit.begin(function () {
    console.log("Start Test Suite");
});

QUnit.moduleStart(function () {
    console.log("Start Module");
});

QUnit.testStart(function () {
    console.log("Start Test");
});

// ====================

QUnit.module('Arithmetic');

QUnit.test('addition', function (assert) {
    assert.strictEqual(op.addition(1, 2), 3);
    assert.ok(op.addition(3, 'test'));
    assert.ok(op.addition('foo', 'bar'));
});

QUnit.test('subtraction', function (assert) {
    assert.strictEqual(op.subtraction(3, 1), 2);
    assert.notOk(op.subtraction(1, 'test'));
    assert.deepEqual(op.subtraction('foo', 'bar'), NaN);
});

QUnit.test('multiplication', function (assert) {
    assert.strictEqual(op.multiplication(6, 7), 42);
    assert.notOk(op.multiplication(0, 42));
    assert.ok(op.multiplication(-1, 9) < 0);
});

QUnit.test('division', function (assert) {
    assert.throws(function () { op.division(4, 0) }, Error);
    assert.strictEqual(op.division(10, 2), 5);
    assert.ok(op.division(4, 2) > 1);
});

// ====================

QUnit.testDone(function () {
    console.log("End Test");
});

QUnit.moduleDone(function () {
    console.log("End Module");
});

QUnit.done(function () {
    console.log("End Test Suite");
});
