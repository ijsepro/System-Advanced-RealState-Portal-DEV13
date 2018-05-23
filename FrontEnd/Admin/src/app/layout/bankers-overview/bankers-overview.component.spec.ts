import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankersOverviewComponent } from './bankers-overview.component';

describe('BankersOverviewComponent', () => {
  let component: BankersOverviewComponent;
  let fixture: ComponentFixture<BankersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankersOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
