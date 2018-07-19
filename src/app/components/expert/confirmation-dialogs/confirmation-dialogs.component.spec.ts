import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogsComponent } from './confirmation-dialogs.component';

describe('ConfirmationDialogsComponent', () => {
  let component: ConfirmationDialogsComponent;
  let fixture: ComponentFixture<ConfirmationDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
