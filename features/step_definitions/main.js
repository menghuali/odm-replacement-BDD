const assert = require('assert');
const {
    Given,
    When,
    Then
} = require('cucumber');

const {notificationRules} = require('../../rules/main.rfl');

When('calls notificaton rules', function () {
    notificationRules(ctx);
})