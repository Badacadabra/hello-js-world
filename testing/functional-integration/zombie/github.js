var Zombie = require('zombie'),
    assert = require('assert');

var browser = new Zombie();

browser.visit('https://github.com/Badacadabra', function () {
    // My GitHub profile
    browser.assert.element('.pinned-repos-list');

    // My GitHub repos
    browser.clickLink('a[href$="repositories"]', function () {
        browser.assert.success();
        browser.assert.element('.js-repo-list');
        browser.assert.text('a[href$="Vimpressionist"]', 'Vimpressionist');

        // hello-js-world
        browser.clickLink('a[href$="hello-js-world"]', function () {
            browser.assert.success();
            browser.assert.elements('a[href$="LICENSE"]', { atLeast: 1 });
            browser.assert.url(/^.*github.*$/);
            browser.assert.url('https://github.com/Badacadabra/hello-js-world');
            browser.assert.elements('.xyz', 0);
            //browser.assert.text('article', 'hello-js-world');
            assert.equal(browser.text('article').slice(0, "hello-js-world".length), "hello-js-world");
        });
    });

});
