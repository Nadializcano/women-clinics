import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reference-detail',
  templateUrl: './reference-detail.component.html',
  styleUrls: ['./reference-detail.component.css'],
  providers: [ReferenceService]
})
export class ReferenceDetailComponent implements OnInit {
  referenceId: string;
  referenceToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private referenceService: ReferenceService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.referenceId = urlParameters['id'];
    });
    this.referenceToDisplay = this.referenceService.getReferenceById(this.referenceId);
  }

}
