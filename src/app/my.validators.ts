import {FormControl} from "@angular/forms";

export class MyValidators {
    static restrictedEmails(control: FormControl): {[key: string]: boolean } {
        if (['v@mail.ua', 'test@gmail.com'].includes(control.value)) {
            return {
                restrictedEmail: true
            }
        }

        return null
    }
}