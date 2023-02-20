import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {AppError} from "../error/app-error";
import {InvalidCredentialsError} from "../error/invalid-credentials-error";
import { DOMAIN } from "../constants";

export class DataService {
	private xsrf: string;

	constructor(protected url: string, protected http: HttpClient) {
		this.xsrf = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1')
	}

	getAll() {
		return this.http.get(this.url, {
			withCredentials: true,	
		}).pipe(catchError(this.handleError));
	}

	loginBasic(email: string, password: string): Observable<any> {
		const b64 = btoa(email + ":" + password);
		const headerValue = "Basic " + b64;
		return this.http.post(DOMAIN.DEV + '/login', null, {
			headers: new HttpHeaders({ 
				'Authorization': headerValue, 
			}),
			withCredentials: true
		  }).pipe(catchError(this.handleError));
	}
	
	handleError(error: HttpErrorResponse) {
		if (error.status === 400) 
			return throwError(new InvalidCredentialsError(error));

		return throwError(new AppError(error)); 
	}

}
