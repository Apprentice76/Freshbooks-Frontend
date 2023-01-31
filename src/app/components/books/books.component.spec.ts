import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';
import { BookItemComponent } from '../book-item/book-item.component';
import { HeaderComponent } from '../header/header.component';

import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let service: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule,
        MatCardModule,
        MatDialogModule,
        MatToolbarModule,
      ],
      declarations: [BooksComponent, HeaderComponent, BookItemComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(BooksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllBooks', () => {
    let books: Book[] = [
      {
        title: 'title',
        author: 'author',
        id: 1,
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date(),
        issueStatus: 'Available',
      },
    ];
    const spy = spyOn(service, 'getAllBooks').and.returnValue(of(books));
    component.ngOnInit();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call dialogBox', () => {
    const spy = spyOn(component, 'openAddBookDialog');
    component.openAddBookDialog();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
