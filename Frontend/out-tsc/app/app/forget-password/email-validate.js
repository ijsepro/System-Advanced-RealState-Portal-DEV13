var EmailValidate = (function () {
    function EmailValidate() {
    }
    EmailValidate.checkEmailRegisterd = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'kushan')
                    resolve({ checkEmailRegisterd: true });
                else
                    resolve(null);
            }, 200);
        });
    };
    return EmailValidate;
}());
export { EmailValidate };
//# sourceMappingURL=email-validate.js.map