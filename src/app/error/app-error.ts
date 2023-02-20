import { HttpErrorResponse } from "@angular/common/http";

export class AppError {

	constructor(private originalError: HttpErrorResponse){
  }

  get message(): string {
    return this.originalError.error.message ?? "no message available";
  }
 
}
