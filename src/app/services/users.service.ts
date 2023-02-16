import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
	}

	loginBasic(email: string, password: string) {
		const b64 = btoa(email + ":" + password);
		const headerValue = "Basic " + b64;
		return this.http.post('http://localhost:8080/api/login', null, {
			headers: new HttpHeaders({ 'Authorization': headerValue })
		}).subscribe(response => {
			console.log(response);
		})
	}

	
	
}
