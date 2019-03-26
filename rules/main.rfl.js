const fs = require('fs');
const engine = require('./engine');
const congnition = require('./cognition/cognition.pkg');
const eligibility = require('./eligibility/eligibility.pkg');
const content = require('./content/content.pkg');

var notificationRules = (ctx) => {
    engine.run(ctx, congnition.rules());
    engine.run(ctx, eligibility.rules());
    engine.run(ctx, content.rules());
    return ctx;
}

module.exports = {
    notificationRules
};