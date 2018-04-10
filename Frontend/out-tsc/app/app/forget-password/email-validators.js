var EmailValidators = (function () {
    function EmailValidators() {
    }
    EmailValidators.checkEmailRegisterd = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'kushan')
                    resolve({ checkEmailRegisterd: true });
                else
                    resolve(null);
            }, 200);
        });
    };
    return EmailValidators;
}());
export { EmailValidators };
//# sourceMappingURL=email-validators.js.map