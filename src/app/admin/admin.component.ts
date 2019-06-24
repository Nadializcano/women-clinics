import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClinicService, ReferenceService]
})
export class AdminComponent implements OnInit {

  constructor(private clinicService: ClinicService, private referenceService: ReferenceService) { }

  ngOnInit() {
  }

}
