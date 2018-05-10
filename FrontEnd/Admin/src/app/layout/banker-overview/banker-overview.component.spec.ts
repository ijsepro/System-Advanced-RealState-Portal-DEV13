import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerOverviewComponent } from './banker-overview.component';

describe('BankerOverviewComponent', () => {
  let component: BankerOverviewComponent;
  let fixture: ComponentFixture<BankerOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankerOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
