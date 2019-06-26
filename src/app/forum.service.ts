import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Post } from './models/post.model';


@Injectable()
export class ForumService {
  posts: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  addToForum(post: Post){
    this.posts.push(post);
  }

  getPosts(){
    return this.posts;
  }

}
