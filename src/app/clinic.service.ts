import { Injectable } from '@angular/core';
import { Clinic } from './models/clinic.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ClinicService {
  clinics: FirebaseListObservable<any[]>;
  
  constructor(private database: AngularFireDatabase) { 
    this.clinics = database.list('clinics');
  }

  getClinics(){
    return this.clinics;
  }

  getClinicById(clinicId: string){
    return this.database.object('clinics/' + clinicId);
  }

  addClinic(newClinic: Clinic){
    this.clinics.push(newClinic);
  }

}
