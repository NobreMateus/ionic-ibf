import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBooksComponent } from './slider-books.component';

describe('SliderBooksComponent', () => {
  let component: SliderBooksComponent;
  let fixture: ComponentFixture<SliderBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
