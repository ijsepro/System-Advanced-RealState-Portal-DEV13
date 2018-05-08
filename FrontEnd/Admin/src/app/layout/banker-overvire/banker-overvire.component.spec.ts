import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerOvervireComponent } from './banker-overvire.component';

describe('BankerOvervireComponent', () => {
  let component: BankerOvervireComponent;
  let fixture: ComponentFixture<BankerOvervireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankerOvervireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerOvervireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
