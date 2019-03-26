const {omit} = require('../helper');

class BookingEligibilityRules {
    run() {
        this.omit_gds();
        this.omit_airmiles();
    }
    
    omit_gds() {
        if (this.booking.channel === 'GDS' && this.guest.reward == undefined)
            omit(this.notification, 'Omit the GDS booking because of missing reward');
    }

    omit_airmiles() {
        if (this.booking.channel === 'AIRMILES')
            omit(this.notification, 'Always omit AIRMILES bookings');
    }
}

module.exports = {
    BookingEligibilityRules
};