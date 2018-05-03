import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureProfileComponent } from './architecture-profile.component';

describe('ArchitectureProfileComponent', () => {
  let component: ArchitectureProfileComponent;
  let fixture: ComponentFixture<ArchitectureProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectureProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
