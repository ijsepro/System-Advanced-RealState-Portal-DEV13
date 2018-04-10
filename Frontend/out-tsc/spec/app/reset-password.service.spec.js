"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var reset_password_service_1 = require("./reset-password.service");
describe('ResetPasswordService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [reset_password_service_1.ResetPasswordService]
        });
    });
    it('should be created', testing_1.inject([reset_password_service_1.ResetPasswordService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=reset-password.service.spec.js.map