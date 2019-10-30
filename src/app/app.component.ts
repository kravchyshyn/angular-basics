import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
    form: FormGroup

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl('', [
                Validators.email,
                Validators.required
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
            ]),

            address: new FormGroup({
                country: new FormControl('ua'),
                city: new FormControl('', Validators.required)
            }),
            skills: new FormArray([]),
            mySkills: new FormArray([]),
            newSkill: new FormControl('', Validators.minLength(5))
        })
    }


    submit() {

        if (this.form.valid) {
            console.log('Form Submitted', this.form)

            // remove not needed form control
            this.form.removeControl('newSkill', null);

            const formData = {...this.form.value}

            console.log('Form data', formData)
        }
    }

    setCapital() {
        const cityMap = {
            ua: 'Kyiv',
            pl: 'Warshava',
            fr: 'Paris'
        }

        const cityKey = this.form.get('address').get('country').value;
        const city = cityMap[cityKey]

        this.form.patchValue({address: {city}})
    }

    addSkill() {
        const control = new FormControl('', Validators.required);

        (<FormArray>this.form.get('skills') ).push(control)
        // (this.form.get('skills') as FormArray).push(control)
    }

    addYourSkill() {

        const newSkillName = this.form.get('newSkill').value;

        (<FormArray>this.form.get('mySkills')).push(new FormControl(newSkillName))

        this.form.get('newSkill').reset()

    }
}