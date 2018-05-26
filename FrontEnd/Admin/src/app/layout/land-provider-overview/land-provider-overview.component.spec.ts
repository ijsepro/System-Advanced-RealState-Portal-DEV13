import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandProviderOverviewComponent } from './land-provider-overview.component';

describe('LandProviderOverviewComponent', () => {
  let component: LandProviderOverviewComponent;
  let fixture: ComponentFixture<LandProviderOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandProviderOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandProviderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
