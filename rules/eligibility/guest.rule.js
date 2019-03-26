const {
    omit
} = require('../helper');

class GuestEligibilityRules {
    run() {
        this.omit_child();
    }

    omit_child() {
        if (this.guest.isChild)
            omit(this.notification, 'Omit notification because the guest is a child');
    }

}

module.exports = {
    GuestEligibilityRules
};