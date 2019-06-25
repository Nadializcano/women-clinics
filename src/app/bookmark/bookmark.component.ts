import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Clinic } from '../models/clinic.model';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
  providers: [BookmarkService]
})
export class BookmarkComponent implements OnInit {
  clinics: FirebaseListObservable<any[]>;

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.clinics = this.bookmarkService.getClinics();
  }

  beginDeletingClinic(clinicToDelete: Clinic){
    if(confirm("Are you sure you want to delete this bookmark?")){
      this.bookmarkService.deleteBookmark(clinicToDelete);
    }
  }

}
