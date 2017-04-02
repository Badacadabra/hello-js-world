var Person = require('../src/Person'),
    assert = require('chai').assert;

suite('Person', function () {
    var me = new Person('Baptiste', 'Vannesson', 27);

    test('should be a valid user', function () {
        assert.equal(me.firstName, 'Baptiste');
        assert.equal(me.lastName, 'Vannesson');
        assert.equal(me.age, 27);
    });

    test('should be able to say "hello"', function () {
        assert.isOk(me.sayHello());
    });

    test('should be able to print complete profile', function () {
        assert.include(me.toString(), 'Baptiste');
    });
});
