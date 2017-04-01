Feature('Github');

Scenario('Display the current GitHub repo', (I) => {
    I.amOnPage('/Badacadabra');
    I.waitForElement('nav');
    I.seeElement('.pinned-repos-list');
    I.click('a[href$="repositories"]');
    I.waitForElement('#user-repositories-list');
    I.seeElement('.js-repo-list');
    I.see('Vimpressionist', 'a[href$="Vimpressionist"]');
    I.click('a[href$="hello-js-world"]');
    I.waitForElement('#js-repo-pjax-container');
    I.seeElement('a[href$="LICENSE"]');
    I.seeInCurrentUrl('github');
    I.seeCurrentUrlEquals('https://github.com/Badacadabra/hello-js-world');
    I.dontSeeElement('.xyz');
    I.see('hello-js-world', 'article');
});
