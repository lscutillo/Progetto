import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackProvaGridComponent } from './feedback-prova-grid.component';

describe('FeedbackProvaGridComponent', () => {
  let component: FeedbackProvaGridComponent;
  let fixture: ComponentFixture<FeedbackProvaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackProvaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackProvaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
