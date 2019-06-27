import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import {SortByRatePipe} from './sortByRate.pipe';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';
import { ReferencesListComponent } from './references-list/references-list.component';
import { ReferenceDetailComponent } from './reference-detail/reference-detail.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { ForumComponent } from './forum/forum.component';
import { EditClinicComponent } from './edit-clinic/edit-clinic.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};


@NgModule({
  declarations: [
    AppComponent,
    ClinicListComponent,
    ClinicDetailComponent,
    ReferencesListComponent,
    ReferenceDetailComponent,
    SortByRatePipe,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    BookmarkComponent,
    PublicComponent,
    PrivateComponent,
    ForumComponent,
    EditClinicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AdminAuthGuardService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
