class _Rule {
    run() {
        this.common();
    }

    common() {
        if (this.notification.status !== 'immediate')
            return;

        var contents = this.notification.contents;
        contents.push('HEADER');
        contents.push('FOOTER');
        contents.push('UNSUBSCRIBE');
        contents.push('WELCOME');
    }
}

var rules = () => {
    return [new _Rule()];
}

module.exports = {
    rules
};