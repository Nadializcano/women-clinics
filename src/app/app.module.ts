import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import {SortByRatePipe} from './sortByRate.pipe';


import { AppComponent } from './app.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';
import { ReferencesListComponent } from './references-list/references-list.component';
import { ReferenceDetailComponent } from './reference-detail/reference-detail.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
