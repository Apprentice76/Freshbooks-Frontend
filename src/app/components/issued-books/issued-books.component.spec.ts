import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from '../header/header.component';

import { IssuedBooksComponent } from './issued-books.component';

describe('IssuedBooksComponent', () => {
  let component: IssuedBooksComponent;
  let fixture: ComponentFixture<IssuedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
      ],
      declarations: [IssuedBooksComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
