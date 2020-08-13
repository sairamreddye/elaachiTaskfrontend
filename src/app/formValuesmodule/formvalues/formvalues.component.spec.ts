import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvaluesComponent } from './formvalues.component';

describe('FormvaluesComponent', () => {
  let component: FormvaluesComponent;
  let fixture: ComponentFixture<FormvaluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormvaluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
