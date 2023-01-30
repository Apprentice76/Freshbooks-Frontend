import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';

import { BookDialogComponent } from './book-dialog.component';

describe('BookDialogComponent', () => {
  let component: BookDialogComponent;
  let fixture: ComponentFixture<BookDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let book: Book = {
    id: 1,
    author: 'sample',
    title: 'sample',
    description: 'sample',
    issueStatus: 'Available',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  it('updates book properties', () => {
    let event = new Event('input');
    let inputField = new HTMLInputElement();
    inputField.value = 'something';
    inputField.dispatchEvent(event);
    component.updatedBook = book;
    component.bookDetailChange(event, 'title');
    expect(component.updatedBook['title']).toBe('something');
  })   

});
