import { Component, OnInit } from '@angular/core';
import { Clinic } from '../models/clinic.model';
import { Router } from '@angular/router';
import { ClinicService } from '../clinic.service';
import { FirebaseListObservable } from 'angularfire2/database'
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css'],
  providers: [ClinicService, BookmarkService]
})
export class ClinicListComponent implements OnInit {
  sortValue: string = "Low-High";
  clinics: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  

  constructor(private router: Router, private clinicService: ClinicService, private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.clinics = this.clinicService.getClinics();
  }

  goToDetailPage(clickedClinic){
    this.router.navigate(['clinics', clickedClinic.$key])
  }

  onChange(optionMenu) {
  this.sortValue = optionMenu;
  }

  addToBookmark(clinic: Clinic){
    this.bookmarkService.addToBookmarked(clinic);
  }


}
