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
var NewAdminRegistrationComponent = (function () {
    function NewAdminRegistrationComponent() {
        this.url = '../../../assets/img/faces/avatar.jpg';
    }
    NewAdminRegistrationComponent.prototype.ngOnInit = function () {
    };
    NewAdminRegistrationComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    NewAdminRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-new-admin-registration',
            templateUrl: './new-admin-registration.component.html',
            styleUrls: ['./new-admin-registration.component.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], NewAdminRegistrationComponent);
    return NewAdminRegistrationComponent;
}());
exports.NewAdminRegistrationComponent = NewAdminRegistrationComponent;
//# sourceMappingURL=new-admin-registration.component.js.map