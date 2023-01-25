import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getAllBooks().subscribe((books) => {
      this.books = books;
      // console.log(this.books);
    });
  }
}
