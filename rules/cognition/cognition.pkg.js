const {
    BookingRules
} = require('./booking.rule');
const {
    GuestRules
} = require('./guest.rule');

var rules = () => {
    return [new BookingRules(), new GuestRules()];
}

module.exports = {
    rules
};