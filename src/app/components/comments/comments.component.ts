import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  dataSource!: any;
  displayedColumns = ['name', 'email', 'body'];
  id!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.commentsService.getById(this.id).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
