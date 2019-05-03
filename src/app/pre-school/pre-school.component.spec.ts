import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSchoolComponent } from './pre-school.component';

describe('PreSchoolComponent', () => {
  let component: PreSchoolComponent;
  let fixture: ComponentFixture<PreSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
