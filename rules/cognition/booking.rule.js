class BookingRules {
    run() {
        this.normal();
        this.gds();
        this.airmiles();
    }

    normal() {
        this.booking.channel = 'NORMAL';
    }

    gds() {
        if (this.booking.pcc === 'TTY')
            this.booking.channel = 'GDS';
    };

    airmiles() {
        if (this.booking.pcc === 'LCW')
            this.booking.channel = 'AIRMILES';
    };

}

module.exports = {
    BookingRules
};