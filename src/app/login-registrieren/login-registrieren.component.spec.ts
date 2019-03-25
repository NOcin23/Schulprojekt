import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistrierenComponent } from './login-registrieren.component';

describe('LoginRegistrierenComponent', () => {
  let component: LoginRegistrierenComponent;
  let fixture: ComponentFixture<LoginRegistrierenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegistrierenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistrierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
