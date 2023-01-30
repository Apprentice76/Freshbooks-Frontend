import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.interface';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';

import { BookItemComponent } from './book-item.component';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;
  let dialogSpy: jasmine.Spy;
  let ref: MatDialogRef<BookDialogComponent, any>;
  let book: Book = {
    id: 1,
    author: 'sample',
    title: 'sample',
    description: 'sample',
    issueStatus: 'Available',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  let dialogRefSpy = {
    minWidth: '600px',
    minHeight: '400px',
    data: book,
    disableClose: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookItemComponent, BookDialogComponent],
      imports: [MatDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(ref);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
