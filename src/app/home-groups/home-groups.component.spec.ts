import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGroupsComponent } from './home-groups.component';

describe('HomeGroupsComponent', () => {
  let component: HomeGroupsComponent;
  let fixture: ComponentFixture<HomeGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
