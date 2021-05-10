import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwIndicatorComponent } from './nw-indicator.component';

describe('NwIndicatorComponent', () => {
  let component: NwIndicatorComponent;
  let fixture: ComponentFixture<NwIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NwIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
