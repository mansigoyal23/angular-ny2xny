import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmasonaryComponent } from './newmasonary.component';

describe('NewmasonaryComponent', () => {
  let component: NewmasonaryComponent;
  let fixture: ComponentFixture<NewmasonaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmasonaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmasonaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
