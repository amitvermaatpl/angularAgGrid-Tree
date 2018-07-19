import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransferToDiskComponent } from './data-transfer-to-disk.component';

describe('DataTransferToDiskComponent', () => {
  let component: DataTransferToDiskComponent;
  let fixture: ComponentFixture<DataTransferToDiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTransferToDiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransferToDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
