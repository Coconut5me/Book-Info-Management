import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book125DetailComponent } from './book125-detail.component';

describe('Book125DetailComponent', () => {
  let component: Book125DetailComponent;
  let fixture: ComponentFixture<Book125DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Book125DetailComponent]
    });
    fixture = TestBed.createComponent(Book125DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
