import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book125NewComponent } from './book125-new.component';

describe('Book125NewComponent', () => {
  let component: Book125NewComponent;
  let fixture: ComponentFixture<Book125NewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Book125NewComponent]
    });
    fixture = TestBed.createComponent(Book125NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
