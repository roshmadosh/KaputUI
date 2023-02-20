import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { InvalidCredentialsError } from '../error/invalid-credentials-error';
import { AppError } from '../error/app-error';
import {DataService} from './data.service';
import {DOMAIN} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService {

  constructor(http: HttpClient) {
		super(DOMAIN.DEV + '/users', http);
	}

}



