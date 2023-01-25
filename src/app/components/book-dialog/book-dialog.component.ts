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
  updatedBook: any;
  noChanges = true;
  status: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private booksService: BooksService,
    private dialogRef: MatDialogRef<BookDialogComponent>
  ) {
    this.updatedBook = this.book;
    this.status = this.updatedBook.issueStatus;
  }

  bookDetailChange(event: Event, key: keyof Book) {
    this.noChanges = false;
    if (this.updatedBook)
      this.updatedBook[key] = (
        (event.target as HTMLInputElement) ||
        (event.target as HTMLTextAreaElement)
      ).value;
    console.log(this.updatedBook);
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
    console.log('Call!', 'value:', this.status);
  }

  closeDialog(res?: Book) {
    this.dialogRef.close(res);
  }

  saveBookChanges() {
    switch (this.status) {
      case 'Issue':
        this.updatedBook.issueStatus = 'Unavailable';
        break;
      case 'Return':
        this.updatedBook.issueStatus = 'Available';
        break;
    }

    if (this.noChanges) {
      this.dialogRef.close();
      return;
    }
    this.booksService.updateBook(this.updatedBook).subscribe(() => {
      this.closeDialog(this.updatedBook);
    });
  }
}
