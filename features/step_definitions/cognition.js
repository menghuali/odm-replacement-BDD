const assert = require('assert');
const {
    Given,
    When,
    Then
} = require('cucumber');

const engine = require('../../rules/engine');
const cognition = require('../../rules/cognition/cognition.pkg');

When('the cognition rules are executed', function () {
    engine.run(global.ctx, cognition.rules());
});

Then('the booking channel should be {string}', function (expected) {
    assert.equal(booking.channel, expected, "The booking channel isn't expected.");
});

Then('it should be {string} that the guest is a child', function (expected) {
    expected = (expected === 'true');
    assert.equal(guest.isChild, expected);
});