import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TestCase } from '../models/testcase.model';

@Injectable({
    providedIn: 'root',
})
export class TestcaseService {
    private readonly apiUrl: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    create(testcase: TestCase) {
        let API_URL = `${this.apiUrl}/testcase`;
        return this.http.post(API_URL, testcase).pipe(catchError(this.error));
    }

    error(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}
