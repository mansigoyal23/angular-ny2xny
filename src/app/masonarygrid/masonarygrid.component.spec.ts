import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonarygridComponent } from './masonarygrid.component';

describe('MasonarygridComponent', () => {
  let component: MasonarygridComponent;
  let fixture: ComponentFixture<MasonarygridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonarygridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonarygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
