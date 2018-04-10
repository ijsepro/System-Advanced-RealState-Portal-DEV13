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
var forget_password_service_service_1 = require("../services/forget-password-service.service");
var ForgetPasswordComponent = (function () {
    function ForgetPasswordComponent(service) {
        this.service = service;
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        // this.service.getPosts()
        //     .subscribe(response => {
        //          this.posts = response.json();
        //     });
    };
    Object.defineProperty(ForgetPasswordComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    ForgetPasswordComponent.prototype.sendMail = function (input) {
        var emaill = { title: input.value };
        input.value = '';
        this.service.sendMail(emaill)
            .subscribe(function (response) {
            alert(response.json());
        });
    };
    ForgetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'forget-password',
            templateUrl: './forget-password.component.html',
            styleUrls: ['./forget-password.component.scss']
        }),
        __metadata("design:paramtypes", [forget_password_service_service_1.ForgetPasswordServiceService])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());
exports.ForgetPasswordComponent = ForgetPasswordComponent;
//# sourceMappingURL=forget-password.component.js.map