import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { of } from 'rxjs';
import { IssueService } from 'src/app/services/issue.service';
import { HeaderComponent } from '../header/header.component';

import { IssuedBooksComponent } from './issued-books.component';

describe('IssuedBooksComponent', () => {
  let component: IssuedBooksComponent;
  let fixture: ComponentFixture<IssuedBooksComponent>;
  let service: IssueService;

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
    service = TestBed.inject(IssueService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getIssueHistory', () => {
    const spy = spyOn(service, 'getIssueHistory').and.callFake(() => {
      return of([{ returnDate: '2023-01-31T08:36:10.481Z' }]);
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
