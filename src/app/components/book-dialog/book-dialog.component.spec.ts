import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatSelectHarness } from '@angular/material/select/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';
import { BooksComponent } from '../books/books.component';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { BookDialogComponent } from './book-dialog.component';

describe('BookDialogComponent', () => {
  let component: BookDialogComponent;
  let fixture: ComponentFixture<BookDialogComponent>;
  let router: Router;
  let loader: HarnessLoader;

  beforeAll(() => {
    localStorage.setItem('user', 'admin');
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatButtonModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'books', component: BooksComponent },
        ]),
      ],
      declarations: [BookDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(BookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update key value of books w.r.t. input', () => {
    const inputDebug = fixture.debugElement.query(By.css('#author'));
    const inputElement: HTMLInputElement = inputDebug.nativeElement;

    inputElement.value = 'some_guy';
    const event = new InputEvent('input');
    expect(component.updatedBook).toEqual({});

    inputElement.dispatchEvent(event);
    component.bookDetailChange(event, 'author');

    expect(component.updatedBook['author']).toBe('some_guy');
  });
});
