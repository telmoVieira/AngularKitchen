import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = "";
    sucessSign: string = "";
    sucessLogin: string = "";
    sucessSignBol = false;
    sucessLoginBol = false;


    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
        this.sucessSign = "";
        this.sucessLogin = "";
        this.sucessSignBol = false;
        this.sucessLoginBol = false;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObs!: Observable<AuthResponseData>;

        this.isLoading = true;
        this.error = '';
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
            this.sucessLoginBol = true;
            this.sucessLogin = "Login sucess!!"
        } else {
            authObs = this.authService.signUp(email, password);
            this.sucessSignBol = true;
            this.sucessSign = "Sign up sucess!!"
        }

        authObs.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;           
        },
            errorMessage => {
                this.error = errorMessage;
                this.isLoading = false;
                this.sucessSignBol = false;
                this.sucessLoginBol = false;
            }
        );
        form.reset();
    }
}