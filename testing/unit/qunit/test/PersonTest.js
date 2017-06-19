var Person = require('../src/Person'),
    assert = require('assert');

QUnit.module('Person');

var me = new Person('Baptiste', 'Vannesson', 27);

QUnit.test('valid user', function (assert) {
    assert.expect(3);
    assert.equal(me.firstName, 'Baptiste');
    assert.equal(me.lastName, 'Vannesson');
    assert.equal(me.age, 27);
});

QUnit.test('say hello', function (assert) {
    assert.expect(1);
    assert.ok(me.sayHello());
});

QUnit.test('print complete profile', function (assert) {
    var str = me.toString(),
        fn = 'Baptiste';

    assert.expect(1);
    assert.equal(str.substr(str.indexOf(fn), fn.length), fn);
});
