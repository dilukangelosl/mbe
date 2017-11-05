import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,public afAuth: AngularFireAuth) { }

   


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log("Guard");
        return this.afAuth.authState.map(auth => {
            console.log(auth);
          if (typeof auth == "undefined" || auth == null) {
            this.router.navigate(['/login']);
            return false;
          } else {
            return true;
          }
        });
      }

     
        
    
}
