class GuestRules {

    run() {
        this.child();
        this.self_service_eligible();
    };

    child() {
        if (this.guest.ssr.includes('CHLD'))
            this.guest.isChild = true;
    };

    self_service_eligible() {
        if (this.guest.ssr && (this.guest.ssr.includes('PRNH') || this.guest.ssr.includes('MEDA')))
            this.guest.selfServiceEligible = false;
        else this.guest.selfServiceEligible = true;
    };

}

module.exports = {
    GuestRules
};