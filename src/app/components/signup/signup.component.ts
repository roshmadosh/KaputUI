import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailValidators} from '../validators/email.validators';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

	form = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			EmailValidators.invalidFormat,
		], [
			EmailValidators.isNotUnique
		]),
		firstName: new FormControl('', [
			Validators.required,
			Validators.minLength(2),
			Validators.maxLength(20)
		]),	
		lastName: new FormControl('', [
			Validators.required,
			Validators.minLength(2),
			Validators.maxLength(20)
		]),
		password: new FormControl('', [
			Validators.required,
		])
	}) 

	onSubmit(form: any) {

	}

	get email() {
		return this.form.get('email');
	}	

	get firstName() {
		return this.form.get('firstName');
	}

	get lastName() {
		return this.form.get('lastName');
	}
	get password() {
		return this.form.get('password');
	}

}
