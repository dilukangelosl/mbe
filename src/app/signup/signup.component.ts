import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {AuthService} from '../services/auth/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()],
    providers:[AuthService]
})
export class SignupComponent implements OnInit {

    public user:any = {};

    constructor(public authService:AuthService) { 


    }

    register(user:any){
         console.log("Creating USer");
         this.authService.signup(user.email,user.password).then(res => {
             console.log(res);
         })
    }

    ngOnInit() { }
}
