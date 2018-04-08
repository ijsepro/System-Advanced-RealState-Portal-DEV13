import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminRegistrationComponent } from './new-admin-registration.component';

describe('NewAdminRegistrationComponent', () => {
  let component: NewAdminRegistrationComponent;
  let fixture: ComponentFixture<NewAdminRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdminRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdminRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
