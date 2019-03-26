const assert = require('assert');
const {
    Given,
    When,
    Then
} = require('cucumber');
const fs = require('fs');
const path = require('path');
const ctxJsonPath = path.join(__dirname, 'request.json');

const cognition = require('../../rules/cognition/cognition.pkg');
const engine = require('../../rules/engine');
var ctx;
var booking;
var guest;

Given('the PCC of a booking is {string}', function (pcc) {
    ctx = JSON.parse(fs.readFileSync(ctxJsonPath));
    booking = ctx.notifications[0].booking;
    booking.pcc = pcc;
});

When('the cognition rules are executed', function () {
    engine.run(ctx, cognition.rules());
});

Then('the booking channel should be {string}', function (expected) {
    assert.equal(booking.channel, expected, "The booking channel isn't expected.");
});

Given('a guest has SSR {string}', function (ssr) {
    ctx = JSON.parse(fs.readFileSync(ctxJsonPath));
    guest = ctx.notifications[0].guest;
    guest.ssr = [ssr];
});

Then('it should be {string} that the guest is a child', function (expected) {
    expected = (expected === 'true');
    assert.equal(guest.isChild, expected);
});