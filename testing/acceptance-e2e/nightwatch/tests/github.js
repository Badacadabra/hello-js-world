module.exports = {
    'My GitHub profile': function (browser) {
        browser
            .url('https://github.com/Badacadabra')
            .waitForElementVisible('nav', 1000)
            .assert.visible('.pinned-repos-list')
            .click('a[href$="repositories"]')
    },
    'My GitHub repos': function (browser) {
        browser
            .waitForElementVisible('#user-repositories-list', 1000)
            .assert.visible('.js-repo-list')
            .assert.containsText('a[href$="Vimpressionist"]', 'Vimpressionist')
            .click('a[href$="hello-js-world"]')
    },
    'hello-js-world': function (browser) {
        browser
            .waitForElementVisible('#js-repo-pjax-container', 1000)
            .assert.visible('a[href$="LICENSE"]')
            .assert.urlContains('github')
            .assert.urlEquals('https://github.com/Badacadabra/hello-js-world')
            .assert.elementNotPresent('.xyz')
            .assert.containsText('article', 'hello-js-world')
            .end();
    }
};
