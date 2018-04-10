var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
var ForgetPasswordServiceService = (function () {
    function ForgetPasswordServiceService(http) {
        this.http = http;
        this.url = 'http://localhost/MyServer/AREP/index.php/user/sendMail';
    }
    // getPosts() {
    //     return this.http.get(this.url);
    // }
    ForgetPasswordServiceService.prototype.sendMail = function (emaill) {
        // return this.http.get(this.url);
        console.log(emaill);
        return this.http.post(this.url + '/' + emaill, emaill);
    };
    ForgetPasswordServiceService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], ForgetPasswordServiceService);
    return ForgetPasswordServiceService;
}());
export { ForgetPasswordServiceService };
//# sourceMappingURL=forget-password-service.service.js.map