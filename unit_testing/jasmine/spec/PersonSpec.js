var Person = require('../lib/Person');

describe('Person test suite', function () {
    var me = new Person('Baptiste', 'Vannesson', 27);

    it('should be a valid user', function () {
        expect(me.firstName).toEqual('Baptiste');
        expect(me.lastName).toEqual('Vannesson');
        expect(me.age).toEqual(27);
    });

    it('should be able to say "hello"', function () {
        expect(me.sayHello()).toBeTruthy();
    });

    it('should be able to print complete profile', function () {
        expect(me.toString()).toContain('Baptiste');
    });
});
