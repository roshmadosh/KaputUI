import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailValidators} from '../validators/email.validators';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	
	form = new FormGroup({
		email: new FormControl('', [ 
			Validators.required,
			EmailValidators.invalidFormat,
		],
		[
			EmailValidators.isNotUnique
		]),
		password: new FormControl('', [
			Validators.required
		])
	})

	onSubmit(f: any) {
		console.log(f.value);
	}

	get email() {
		return this.form.get('email');
	}

	get password() {
		return this.form.get('password');
	}

}
