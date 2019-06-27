import { Injectable } from '@angular/core';
import { AdminUser } from './models/admin-user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthenticationService {
  user$: Observable<firebase.User>;
  appUser$: any;

  constructor(public afAuth: AngularFireAuth, private userService: UserService) {
    this.user$ = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get adminUser$() : Observable<AdminUser> {
    return this.user$
    .switchMap(user => {
      if(user) return this.userService.get(user.uid);

      return Observable.of(null);
    })
  }

}
