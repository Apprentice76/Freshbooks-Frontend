import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { ReturnedBooksComponent } from './returned-books.component';
import { ReturnService } from 'src/app/services/return.service';
import { HeaderComponent } from '../header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

describe('ReturnedBooksComponent', () => {
  let component: ReturnedBooksComponent;
  let fixture: ComponentFixture<ReturnedBooksComponent>;
  let service: ReturnService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
      ],
      declarations: [ReturnedBooksComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
