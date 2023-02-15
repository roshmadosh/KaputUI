import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	
	form = new FormGroup({
		email: new FormControl('', [ 
			Validators.required,
			Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/),
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
