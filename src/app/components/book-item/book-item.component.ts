import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit, OnChanges {
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

  ngOnChanges(changes: SimpleChanges) {
    console.log('change!', changes);
  }

  constructor(private bookDialog: MatDialog) {}

  shortenDescription(description: string): string {
    let maxLength = 50;
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

    const dialogSub = dialogRef.afterClosed().subscribe((updatedBook: Book) => {
      if (updatedBook) {
        this.book = updatedBook;
        this.ngOnInit();
      }
    });

    // setTimeout(() => dialogSub.unsubscribe(), 2000);
  }
}
