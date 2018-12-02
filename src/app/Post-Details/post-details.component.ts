import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/Services/post.service';
import { Observable } from 'rxjs';
import {Post} from 'src/app/post.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  
  posts: any = [];

  constructor(private ps:PostService){}

  ngOnInit(){
   
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deletePost(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
