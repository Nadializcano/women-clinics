import { Component, OnInit } from '@angular/core';
import { Clinic } from '../models/clinic.model';
import { Router } from '@angular/router';
import { ClinicService } from '../clinic.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css'],
  providers: [ClinicService]
})
export class ClinicListComponent implements OnInit {
  clinics: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private clinicService: ClinicService) { }

  ngOnInit() {
    this.clinics = this.clinicService.getCLinics();
  }

  goToDetailPage(clickedClinic){
    this.router.navigate(['clinics', clickedClinic.$key])
  }

}
