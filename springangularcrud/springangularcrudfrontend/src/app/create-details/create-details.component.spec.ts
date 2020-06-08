import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDetailsComponent } from './create-details.component';

describe('CreateDetailsComponent', () => {
  let component: CreateDetailsComponent;
  let fixture: ComponentFixture<CreateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
