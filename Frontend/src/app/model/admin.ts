export class Admin {
    adminName: string;
    adminEmail: string;
    adminPassword: string;

    constructor(adminName, adminEmail, adminPassword) {
        this.adminName = adminName;
        this.adminEmail = adminEmail;
        this.adminPassword = adminPassword;
    }
}