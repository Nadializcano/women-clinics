import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [ForumService]
})
export class ForumComponent implements OnInit {
    posts: FirebaseListObservable<any[]>;

  constructor(private forumService: ForumService) { }

  ngOnInit() {
      this.posts = this.forumService.getPosts();
  }

  submitPost(title: string, content: string){
    var newPost : Post = new Post(title, content);
    this.forumService.addToForum(newPost);
  }


}
