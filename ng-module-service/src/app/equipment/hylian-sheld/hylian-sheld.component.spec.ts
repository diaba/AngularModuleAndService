import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HylianSheldComponent } from './hylian-sheld.component';

describe('HylianSheldComponent', () => {
  let component: HylianSheldComponent;
  let fixture: ComponentFixture<HylianSheldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HylianSheldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HylianSheldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
