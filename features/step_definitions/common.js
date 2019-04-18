const assert = require('assert');
const {
    Given
} = require('cucumber');
const fs = require('fs');
const path = require('path');
const ctxJsonPath = path.join(__dirname, 'request.json');

Given('there is a notification', function () {
    global.ctx = JSON.parse(fs.readFileSync(ctxJsonPath));
    global.notification = ctx.notifications[0];
    global.booking = ctx.notifications[0].booking;
    global.guest = notification.guest;
});

Given('it is {string} that the guest has a reward', function (hasReward) {
    if (hasReward === 'yes' || hasReward === 'true')
        guest.reward = {
            number: "1234",
            tier: "Teal"
        };
});

Given('the PCC of a booking is {string}', function (pcc) {
    booking.pcc = pcc;
});

Given('a guest has SSR {string}', function (ssr) {
    guest.ssr.push(ssr);
});


Given('the booking channel is WVI', function () {
    booking.channel = 'WVI';
});