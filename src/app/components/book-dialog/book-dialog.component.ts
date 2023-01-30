import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../../models/book.interface';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
})
export class BookDialogComponent {
  updatedBook: any = {};
  noChanges = true;
  status: string = '';
  data: Object = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private booksService: BooksService,
    public dialogRef: MatDialogRef<BookDialogComponent>
  ) {
    if (this.book) {
      this.updatedBook = this.book;
      this.status = this.updatedBook.issueStatus;
      return;
    }
  }

  bookDetailChange(event: Event, key: keyof Book) {
    this.noChanges = false;
    if (this.updatedBook)
      this.updatedBook[key] = (
        (event.target as HTMLInputElement) ||
        (event.target as HTMLTextAreaElement)
      ).value;
  }

  issueStatusChange(event: MatSelectChange) {
    this.noChanges = false;
    switch (event.value) {
      case undefined:
        this.status = 'Clear';
        break;
      case 'Issue':
        this.status = 'Issue';
        break;
      case 'Return':
        this.status = 'Return';
        break;
    }
  }

  closeDialog() {
    this.dialogRef.close('close');
  }

  saveBookChanges() {
    // adding new book
    if (!this.book) {
      this.booksService.addBook(this.updatedBook).subscribe((res) => {
        this.dialogRef.close(res as Book);
      });
      return;
    }

    switch (this.status) {
      case 'Issue':
        this.updatedBook.issueStatus = 'Unavailable';
        break;
      case 'Return':
        this.updatedBook.issueStatus = 'Available';
        break;
    }

    // updating book
    this.booksService.updateBook(this.updatedBook).subscribe(() => {
      this.dialogRef.close(this.updatedBook);
    });
  }

  deleteBook() {
    this.booksService.deleteBook(this.book.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
