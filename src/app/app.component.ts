import { Component, OnInit } from '@angular/core';
import { PostCommentService } from './services/post-comment-service.service';
import { Post } from './models/Post';
import { Comment } from './models/Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[];
  comments: Comment[];
  postComments = [];
  postId: number;
  // hasComments: boolean = false;
  constructor(
    private postCommentService: PostCommentService,
  ){}

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this.postCommentService.getAllPosts().subscribe(
      posts => {
        this.posts = posts;
      },
      error =>{
        console.log('Error fetching Posts');
      }
    );
  }

  showComments(id: number){ // param = Post ID
    this.postComments = [];
    this.postCommentService.getAllComments().subscribe(
      comments => {
        this.comments = comments;
        for (let comment of this.comments){
          if(comment.postId == id){
            // console.log(comment);
            this.postComments.push(comment);
          }
        }
        if(this.postComments.length > 0){
          this.postId = id;
        }
      },
      error => {
        console.log('Error fetching Comments');
      }
    );
  }
}
