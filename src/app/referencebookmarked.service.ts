import { Injectable } from '@angular/core';
import { Reference } from './models/reference.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ReferencebookmarkedService {
  references: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.references = database.list('bookmarkedreferences');
  }

  getReferences() {
    return this.references;
  }

  getReferenceById(referenceId: string) {
    return this.database.object('bookmarkedreferences/' + referenceId);
  }

  addReference(newReference: Reference) {
    this.references.push(newReference);
  }

  addToBookmarkedRef(newreference: Reference) {
    this.references.push(newreference);


  }





}
