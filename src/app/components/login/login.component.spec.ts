import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../header/header.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [LoginComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call inputHandler', () => {
    const spy = spyOn(component, 'inputHandler');

    component.inputHandler(new Event('input'), 'email');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should update email field', () => {
    const inputDebug = fixture.debugElement.query(By.css('#email'));
    const inputElement: HTMLInputElement = inputDebug.nativeElement;

    inputElement.value = 'abc@xyz.com';
    const event = new Event('input');
    expect(component.email).toBe('');

    inputElement.dispatchEvent(event);
    component.inputHandler(event, 'email');

    expect(component.email).toBe('abc@xyz.com');
  });

  it('should call log in', async () => {
    const spy = spyOn(component, 'logIn');
    component.logIn();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
