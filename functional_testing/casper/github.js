casper.test.begin('Test my GitHub repos', function (test) {
    casper.start('https://github.com/Badacadabra', function () {
        test.assertVisible('.pinned-repos-list');
    });

    casper.then(function () {
        this.click('a[href$="repositories"]');
    });

    casper.waitForSelector('#user-repositories-list', function () {
        test.assertVisible('.js-repo-list');
        test.assertSelectorHasText('a[href$="Vimpressionist"]', 'Vimpressionist');
    });

    casper.then(function () {
        this.click('a[href$="hello-js-world"]');
    });

    casper.waitForSelector('#js-repo-pjax-container', function () {
        test.assertVisible('a[href$="LICENSE"]');
        test.assertUrlMatch(/^.*github.*$/)
        test.assertUrlMatch(/^https:\/\/github\.com\/Badacadabra\/hello-js-world$/);
        test.assertDoesntExist('.xyz');
        test.assertSelectorHasText('article', 'hello-js-world');
    });

    casper.run(function() {
        test.done();
    });
});
