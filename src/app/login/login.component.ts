import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from '../services/auth/auth.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers:[AuthService]
})
export class LoginComponent implements OnInit {

    public user:any = {
        email:"",
        password:""
    }
    loading:boolean = false;
    constructor(public router: Router, public authService:AuthService) {

    }

    login(email,password){
        this.loading = true;
        console.log("Loggin in...");
        this.authService.login(email,password).then(res => {
            this.loading = false;
           this.router.navigate(['./dashboard'])
        }).catch(err => {
            this.loading = false;
            alert("Login Failed");
        })
    }

    ngOnInit() {
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

}
