import {AbstractControl, ValidationErrors} from "@angular/forms";

export class EmailValidate {

    static checkEmailRegisterd(control: AbstractControl): Promise<ValidationErrors  | null> {

        return new Promise((resolve , reject )=>{
            setTimeout(() => {
                if (control.value === 'kushan')
                    resolve ({checkEmailRegisterd: true});
                else
                    resolve(null);
            }, 200);
        });
    }
}