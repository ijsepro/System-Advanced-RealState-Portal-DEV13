import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorProfileComponent } from './constructor-profile.component';

describe('ConstructorProfileComponent', () => {
  let component: ConstructorProfileComponent;
  let fixture: ComponentFixture<ConstructorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
