"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent() {
        this.form = new forms_1.FormGroup({
            password: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ]),
            rePassword: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ])
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "rePassword", {
        get: function () {
            return this.form.get('rePassword');
        },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset-password.component.js.map