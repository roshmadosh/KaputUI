import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from 'src/app/services/users.service';
import {EmailValidators} from '../validators/email.validators';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	constructor(private usersService: UsersService){}
	
	form = new FormGroup({
		email: new FormControl('', [ 
			Validators.required,
			EmailValidators.invalidFormat,
		]),
		password: new FormControl('', [
			Validators.required
		])
	})

	onSubmit() {
		this.usersService.loginBasic(this.email?.value, this.password?.value);
	}

	get email() {
		return this.form.get('email');
	}

	get password() {
		return this.form.get('password');
	}

}
