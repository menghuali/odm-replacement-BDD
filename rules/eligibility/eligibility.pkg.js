const {
    BookingEligibilityRules
} = require('./booking.rule');

const {
    GuestEligibilityRules
} = require('./guest.rule');

var rules = () => {
    return [new BookingEligibilityRules(), new GuestEligibilityRules()];
}

module.exports = {
    rules
};