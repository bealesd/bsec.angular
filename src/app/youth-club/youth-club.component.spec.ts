import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthClubComponent } from './youth-club.component';

describe('YouthClubComponent', () => {
  let component: YouthClubComponent;
  let fixture: ComponentFixture<YouthClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
