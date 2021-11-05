import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}


@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}
    
    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSi24nnR2cvRT-h-Y0KkZxZQzip08dJ-U', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
      ).pipe(catchError(errorRes => {
          let errorMessage = 'An unknown error ocurred!';
          if(!errorRes.error || !errorRes.error.error) {
              return throwError(errorMessage);
          }
          switch(errorRes.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email exist already';
          }
          return throwError(errorMessage);
      }));
        
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSi24nnR2cvRT-h-Y0KkZxZQzip08dJ-U', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
      ).pipe(catchError(errorRes => {
          let errorMessage = 'An unknown error ocurred!';
          if(!errorRes.error || !errorRes.error.error) {
              return throwError(errorMessage);
          }
          switch(errorRes.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email exist already';
          }
          return throwError(errorMessage);
      }));
    }
}