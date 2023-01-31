import { Component, OnInit } from '@angular/core';
import { ReturnService } from 'src/app/services/return.service';

@Component({
  selector: 'app-returned-books',
  templateUrl: './returned-books.component.html',
  styleUrls: ['./returned-books.component.scss'],
})
export class ReturnedBooksComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'returnDate'];
  dataSource: any[] = [];

  constructor(private returnService: ReturnService) {}

  ngOnInit() {
    this.returnService.getReturnHistory().subscribe((returnHistory: any) => {
      for (let row of returnHistory) {
        row['returnDate'] = this.returnService.prettifyDate(row['returnDate']);
      }
      this.dataSource = returnHistory;
    });
  }
}
