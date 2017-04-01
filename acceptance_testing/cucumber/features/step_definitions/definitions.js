var expect = require('chai').expect;

module.exports = function () {
    this.Given(/^I am on my GitHub profile$/, function () {
        browser.url('https://github.com/Badacadabra');
        browser.waitForVisible('nav');
        expect(browser.isVisible('.pinned-repos-list')).to.be.true;
    });

    this.When(/^I click on "([^"]*)"$/, function () {
        browser.click('a[href$="repositories"]');
        browser.waitForVisible('#user-repositories-list');
    });

    this.Then(/^I should see my repos$/, function () {
        expect(browser.isVisible('.js-repo-list')).to.be.true;
    });

    this.Given(/^I can see all my repos$/, function () {
        expect(browser.getText('a[href$="Vimpressionist"]')).to.contain('Vimpressionist');
    });

    this.When(/^I click on "([^"]*)"$/, function () {
        browser.click('a[href$="hello-js-world"]');
        browser.waitForVisible('#js-repo-pjax-container');
    });

    this.Then(/^I should see the repo$/, function () {
        expect(browser.isVisible('a[href$="LICENSE"]')).to.be.true;
        expect(browser.getUrl()).to.contain('github');
        expect(browser.getUrl()).to.equal('https://github.com/Badacadabra/hello-js-world')
        expect(browser.element('.xyz')).to.not.exist;
        expect(browser.getText('article')).to.contain('hello-js-world');
    });
}
