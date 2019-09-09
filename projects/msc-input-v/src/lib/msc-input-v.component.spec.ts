import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MscInputVComponent } from './msc-input-v.component';

describe('MscInputVComponent', () => {
  let component: MscInputVComponent;
  let fixture: ComponentFixture<MscInputVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MscInputVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MscInputVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
