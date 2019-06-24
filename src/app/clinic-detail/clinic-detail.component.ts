import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Clinic } from '../models/clinic.model';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.css'],
  providers: [ClinicService]
})
export class ClinicDetailComponent implements OnInit {
  clinicId: string;
  clinicToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private clinicService: ClinicService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.clinicId = urlParameters['id'];
    });
    this.clinicToDisplay = this.clinicService.getClinicById(this.clinicId)
  }

}
