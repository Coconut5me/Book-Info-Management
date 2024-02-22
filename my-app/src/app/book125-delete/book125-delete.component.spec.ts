import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book125DeleteComponent } from './book125-delete.component';

describe('Book125DeleteComponent', () => {
  let component: Book125DeleteComponent;
  let fixture: ComponentFixture<Book125DeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Book125DeleteComponent]
    });
    fixture = TestBed.createComponent(Book125DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
