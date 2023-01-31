import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
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
import { of } from 'rxjs';

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
    service = TestBed.inject(ReturnService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getReturnHistory', () => {
    const spy = spyOn(service, 'getReturnHistory').and.callFake(() => {
      return of([{ issueDate: '2023-01-31T08:36:10.481Z' }]);
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
