import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiChecklistComponent } from './ui-checklist.component';

describe('UiChecklistComponent', () => {
  let component: UiChecklistComponent;
  let fixture: ComponentFixture<UiChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
