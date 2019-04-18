class GuestRules {

    run() {
        this.child();
        this.self_service_eligible();
        this.wvi_booking();
    };

    child() {
        if (this.guest.ssr.includes('CHLD'))
            this.guest.isChild = true;
    };

    wvi_booking() {
        if (this.guest.ssr.includes('WVIG'))
            this.booking.channel = 'WVI';
    }

    self_service_eligible() {
        if (this.guest.ssr && (this.guest.ssr.includes('PRNH') || this.guest.ssr.includes('MEDA')))
            this.guest.selfServiceEligible = false;
        else this.guest.selfServiceEligible = true;
    };

}

module.exports = {
    GuestRules
};