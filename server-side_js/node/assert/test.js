var assert = require('assert');

function add(arg1, arg2) {
    return arg1 + arg2;
}

assert(add(1, 1));
assert.deepEqual(add(1, 1), '2');
assert.deepStrictEqual(add(1, 1), 2);
assert.doesNotThrow(function () { add(1, 1); });
assert.equal(add(1, 1), 2);
// assert.fail(add(1, 1), 3, 'Ooops!', '=');
assert.ifError(false);
assert.notDeepEqual(add(1, 1), 3);
assert.notDeepStrictEqual(add(1, 1), 3);
assert.notEqual(add(1, 1), 3);
assert.notStrictEqual(add(1, 1), '2');
assert.ok(add(1, 1));
assert.strictEqual(add(1, 1), 2);
assert.throws(function () { throw new Error('Test'); });
