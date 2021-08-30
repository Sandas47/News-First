import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleViewComponent } from './single-view.component';

describe('SingleViewComponent', () => {
  let component: SingleViewComponent;
  let fixture: ComponentFixture<SingleViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
