var omit = (notification, msg) => {
    notification.status = 'omitted';
    notification.log.push(msg);
};

module.exports = {
    omit
};