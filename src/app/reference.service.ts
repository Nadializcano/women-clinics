import { Injectable } from '@angular/core';
import { Reference } from './models/reference.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ReferenceService {
  references: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.references = database.list('references');
  }

  getReferences(){
    return this.references;
  }

  getReferenceById(referenceId: string){
    return this.database.object('references/' + referenceId);
  }

  addReference(newReference: Reference){
    this.references.push(newReference);
  }

  addToBookmarkedRef(newreference: Reference){
    this.references.push(newreference);
    alert(newreference);

  }





}
