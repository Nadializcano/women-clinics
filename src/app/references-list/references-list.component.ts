import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Reference } from '../models/reference.model';

@Component({
  selector: 'app-references-list',
  templateUrl: './references-list.component.html',
  styleUrls: ['./references-list.component.css'],
  providers: [ReferenceService]
})
export class ReferencesListComponent implements OnInit {
  references: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private referenceService: ReferenceService) { }

  ngOnInit() {
    this.references = this.referenceService.getReferences();
  }

  goToDetailPage(clickedReference){
    this.router.navigate(['references', clickedReference.$key])
  }

}
