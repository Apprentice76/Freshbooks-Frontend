import { Component, Input, OnInit } from '@angular/core';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book | undefined;

  @Input() title: string = '';
  @Input() author: string = '';
  @Input() issueStatus: string = '';
  @Input() description: string = '';

  ngOnInit() {
    if (this.book) {
      this.title = this.book.title;
      this.author = this.book.author;
      this.issueStatus = this.book.issueStatus;
      this.description = this.shortenDescription(this.book.description);
    }
  }

  constructor(private bookDialog: MatDialog) {}

  shortenDescription(description: string): string {
    let maxLength = 50;
    if (!description) return '';
    return description.length > maxLength
      ? description.slice(0, maxLength - 1) + '...'
      : description;
  }

  openBookDialog() {
    const dialogRef = this.bookDialog.open(BookDialogComponent, {
      minWidth: '600px',
      minHeight: '400px',
      data: this.book,
      disableClose: true,
    });

    dialogRef
      .afterClosed()
      .subscribe((response: Book | undefined | 'close') => {
        if (response === 'close') return;
        this.book = response;
        this.ngOnInit();
      });
  }
}
