import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";

import { AuthResponseData, AuthService } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
    isLoginMode = true;
    isLoading = false;
    error: string = "";
    sucessSign: string = "";
    sucessLogin: string = "";
    sucessSignBol = false;
    sucessLoginBol = false;
    @ViewChild(PlaceholderDirective) alerHost: PlaceholderDirective;

    private closeSub: Subscription;


    constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnDestroy(){
        if(this.closeSub){
            this.closeSub.unsubscribe();
        }
    }

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
            this.router.navigate(['/recipes']);           
        },
            errorMessage => {
                this.error = errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading = false;
                this.sucessSignBol = false;
                this.sucessLoginBol = false;
            }
        );
        form.reset();
    }

    onHandleError() {
        this.error = null;
    }

    private showErrorAlert(message: string) {
      //  const alerCmp = new AlertComponent();
     const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
     const hostViewContainerRef = this.alerHost.viewContainerRef;
     hostViewContainerRef.clear();

     const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

     componentRef.instance.message = message;
     this.closeSub = componentRef.instance.close.subscribe(() => {
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
     });
    }
}