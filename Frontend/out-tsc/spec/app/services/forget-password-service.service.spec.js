"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forget_password_service_service_1 = require("./forget-password-service.service");
describe('ForgetPasswordServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [forget_password_service_service_1.ForgetPasswordServiceService]
        });
    });
    it('should be created', testing_1.inject([forget_password_service_service_1.ForgetPasswordServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=forget-password-service.service.spec.js.map