import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {


   }


   login(email,password) {
   return this.afAuth
    .auth
    .signInWithEmailAndPassword(email, password);
    
  }

  signup(email: string, password: string) {
   return this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
          
  }


  logout() {
    return this.afAuth.auth.signOut();
  }
}
