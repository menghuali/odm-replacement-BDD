const fs = require('fs');
const engine = require('./engine');
const congnition = require('./cognition/cognition.pkg');
const eligibility = require('./eligibility/eligibility.pkg');
const content = require('./content/content.pkg');

var ctx = JSON.parse(fs.readFileSync('request.json'));
engine.run(ctx, congnition.rules());
engine.run(ctx, eligibility.rules());
engine.run(ctx, content.rules());

console.log(JSON.stringify(ctx));