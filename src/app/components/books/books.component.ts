import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private booksService: BooksService,
    private bookDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem('user') !== 'admin') {
      this.router.navigate(['/login']);
    }

    this.booksService.getAllBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  openAddBookDialog() {
    const dialogRef = this.bookDialog.open(BookDialogComponent, {
      minWidth: '600px',
      minHeight: '400px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((updatedBook: Book) => {
      if (updatedBook) {
        this.books.push(updatedBook);
      }
    });
  }
}
