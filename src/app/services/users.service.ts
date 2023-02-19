import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { InvalidCredentialsError } from '../error/invalid-credentials-error';
import { AppError } from '../error/app-error';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
	}

	loginBasic(email: string, password: string): Observable<any> {
		const b64 = btoa(email + ":" + password);
		const headerValue = "Basic " + b64;

		return this.http.post(this.url + '/login', null, {
			headers: new HttpHeaders({ 'Authorization': headerValue })
		  }).pipe(catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          return throwError(new InvalidCredentialsError(error));
        } return throwError(new AppError(error)); 
      }));
	}

	getAllUsers() {

	}
	
}
