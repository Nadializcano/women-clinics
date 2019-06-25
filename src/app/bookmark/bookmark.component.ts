import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { FirebaseListObservable } from 'angularfire2/database';

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

}
