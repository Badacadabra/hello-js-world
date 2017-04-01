module.exports = {
    'My GitHub profile': function (client) {
        client.url('https://github.com/Badacadabra').pause(1000);
        client.expect.element('nav').to.be.present.before(1000);
        client.click('a[href$="repositories"]').pause(1000);
    },
    'My GitHub repos': function (client) {
        client.expect.element('.js-repo-list').to.be.present.before(1000);
        client.expect.element('a[href$="Vimpressionist"]').text.to.equal('Vimpressionist');
        client.click('a[href$="hello-js-world"]').pause(1000);
    },
    'hello-js-world': function (client) {
        client.expect.element('a[href$="LICENSE"]').to.be.present.before(1000);
        client.verify.urlContains('github');
        client.verify.urlEquals('https://github.com/Badacadabra/hello-js-world');
        client.expect.element('.xyz').to.not.be.present;
        client.expect.element('article').text.to.contain('hello-js-world');
        client.end();
    }
}
