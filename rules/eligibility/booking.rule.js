const {omit} = require('../helper');

class BookingEligibilityRules {
    run() {
        this.omit_gds();
        this.omit_airmiles();
        this.omit_wvi();
    }
    
    omit_gds() {
        if (this.booking.channel === 'GDS' && this.guest.reward == undefined)
            omit(this.notification, 'Omit the GDS booking because of missing reward');
    }

    omit_airmiles() {
        if (this.booking.channel === 'AIRMILES')
            omit(this.notification, 'Always omit AIRMILES bookings');
    }

    omit_wvi() {
        if (this.booking.channel === 'WVI')
            omit(this.notification, 'Always omit WVI bookings');
    }
}

module.exports = {
    BookingEligibilityRules
};