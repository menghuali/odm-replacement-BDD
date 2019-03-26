var run = (ctx, rules) => {
    var notifications = ctx['notifications'];
    var flight = ctx['flight'];

    notifications.forEach(notification => {
        rules.forEach(rule => {
            rule.flight = flight;
            rule.notification = notification;
            rule.booking = notification.booking;
            rule.guest = notification.guest;
            rule.trip = notification.trip;
            rule.run();
        });
    });
};

module.exports = {
    run
}