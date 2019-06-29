import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Clinic } from '../models/clinic.model';
import { ReferencebookmarkedService } from '../referencebookmarked.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
  providers: [BookmarkService, ReferencebookmarkedService]
})
export class BookmarkComponent implements OnInit {
  clinics: FirebaseListObservable<any[]>;
  bookmarkedreferences: FirebaseListObservable<any[]>;

  constructor(private bookmarkService: BookmarkService, private referenceService: ReferencebookmarkedService) { }

  ngOnInit() {
    this.clinics = this.bookmarkService.getClinics();
    this.bookmarkedreferences = this.referenceService.getReferences();
  }

  beginDeletingClinic(clinicToDelete: Clinic) {
    if (confirm("Are you sure you want to delete this bookmark?")) {
      this.bookmarkService.deleteBookmark(clinicToDelete);
    }
  }

}
