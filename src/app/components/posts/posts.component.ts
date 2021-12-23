import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  dataSource!: any;
  displayedColumns = ['userId', 'id', 'title', 'body', 'comments'];

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.getAll().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  navigateComments(id: any){
    this.router.navigate([`/comments/${id}`]);
  }
}
