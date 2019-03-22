const assert = require('assert');
const {
    Given,
    When,
    Then
} = require('cucumber');

var notification = {
    trip: {},
    guest: {},
    content: []
};

function businessLoungeContent(notification) {
    if (notification.type === '24HR' && (notification.trip.fareBundle === 'business' ||
            notification.fareBundle === 'business flex' ||
            notification.fareBundle === 'business upgrade') &&
        (notification.guest.tier != 'Platinum' && notification.guest.tier != 'Gold') &&
        notification.guest.lounge)
        notification.content.push('COURTESY-BUSINESS-LOUNGE');
};

Given('notification is {string}', function (type) {
    notification.type = type;
});

Given('fare bundle is {string}', function (fareBundle) {
    notification.trip.fareBundle = fareBundle.toLowerCase();
});

Given('guest reward tier is {string}', function (tier) {
    notification.guest.tier = tier;
});

Given('it is {string} that the guest is eligible for lounge', function (lounge) {
    notification.guest.lounge = (lounge.toLowerCase() === 'yes');
});

When('I ask whether display COURTESY-BUSINESS-LOUNGE', function () {
    businessLoungeContent(notification);
});

Then('I expect be told {string}', function (expectedAnswer) {
    var actualAnswer = notification.content.includes('COURTESY-BUSINESS-LOUNGE') ? 'yes' : 'no';
    assert.equal(actualAnswer, expectedAnswer.toLowerCase());
    notification.content = [];
});