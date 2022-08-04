import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreappComponent } from './bookstoreapp.component';

describe('BookstoreappComponent', () => {
  let component: BookstoreappComponent;
  let fixture: ComponentFixture<BookstoreappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstoreappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
