import { HttpErrorResponse } from "@angular/common/http";

export class AppError {

	constructor(private originalError: HttpErrorResponse){
  }

  get message() {
    return this.originalError.error.message;
  }
 
}