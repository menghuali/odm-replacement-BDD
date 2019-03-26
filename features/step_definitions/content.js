const assert = require('assert');
const {
    Given,
    When,
    Then
} = require('cucumber');

const engine = require('../../rules/engine');
const content = require('../../rules/content/content.pkg');

When('the content rules are executed', function () {
    engine.run(ctx, content.rules());
});

Then('the notification has {string}', function (content) {
    assert.equal(true, notification.contents.includes(content));
});