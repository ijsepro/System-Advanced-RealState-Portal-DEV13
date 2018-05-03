import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureOverviewComponent } from './architecture-overview.component';

describe('ArchitectureOverviewComponent', () => {
  let component: ArchitectureOverviewComponent;
  let fixture: ComponentFixture<ArchitectureOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectureOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
