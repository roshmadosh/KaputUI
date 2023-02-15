import {AbstractControl, ValidationErrors} from "@angular/forms";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

export class EmailValidators {

	static invalidFormat(control: AbstractControl): ValidationErrors | null {
		const value: string = control.value as string;
		if (!value.match(emailRegex)) {
			return {invalidFormat: true	}
		} return null;
	}

	static isNotUnique(control: AbstractControl): Promise<ValidationErrors | null> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if ((control.value as string) === "email@email.com") {
					resolve({ isNotUnique: true });
				}	else {
					resolve(null);
				}
			}, 1000);
		})	
	}
}
