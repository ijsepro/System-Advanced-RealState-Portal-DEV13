import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorOverviewComponent } from './constructor-overview.component';

describe('ConstructorOverviewComponent', () => {
  let component: ConstructorOverviewComponent;
  let fixture: ComponentFixture<ConstructorOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
