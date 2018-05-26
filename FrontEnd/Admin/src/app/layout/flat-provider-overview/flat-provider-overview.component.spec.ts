import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatProviderOverviewComponent } from './flat-provider-overview.component';

describe('FlatProviderOverviewComponent', () => {
  let component: FlatProviderOverviewComponent;
  let fixture: ComponentFixture<FlatProviderOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatProviderOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatProviderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
