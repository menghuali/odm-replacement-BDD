const assert = require('assert');
const {
    Given,
    When,
    Then
} = require('cucumber');

const engine = require('../../rules/engine');
const eligibility = require('../../rules/eligibility/eligibility.pkg');

Given('the booking channel is {string}', function (channel) {
    booking.channel = channel;
});

Given('the guest is child', function () {
    guest.isChild = true;
});

When('eligibility rules are executed', function () {
    engine.run(ctx, eligibility.rules());
});

Then('the notification status is {string}', function (expected) {
    assert.equal(notification.status, expected);
});

Then('the omission reason is {string}', function (omission) {
    if (omission.length > 0)
        assert.equal(true, notification.log.includes(omission));
});