import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.scss'],
})
export class IssuedBooksComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'issueDate'];
  dataSource: { [key: string]: string | Date }[] = [{}];

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.issueService.getIssueHistory().subscribe((issueHistory: any) => {
      for (let row of issueHistory) {
        row['issueDate'] = this.issueService.prettifyDate(row['issueDate']);
      }
      this.dataSource = issueHistory;
    });
  }
}
