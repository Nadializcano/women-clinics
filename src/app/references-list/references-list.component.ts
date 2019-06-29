import { Component, OnInit } from '@angular/core';
import { ReferencebookmarkedService } from '../referencebookmarked.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Reference } from '../models/reference.model';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-references-list',
  templateUrl: './references-list.component.html',
  styleUrls: ['./references-list.component.css'],
  providers: [ReferencebookmarkedService, ReferenceService]
})
export class ReferencesListComponent implements OnInit {
  references: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private referencebookmarkedService: ReferencebookmarkedService, private referenceService: ReferenceService) { }

  ngOnInit() {
    this.references = this.referenceService.getReferences();

  }

  goToDetailPage(clickedReference) {
    this.router.navigate(['references', clickedReference.$key])
  }

  addToBookmarkedRef(newreference: Reference) {
    this.referencebookmarkedService.addToBookmarkedRef(newreference);
  }





}
