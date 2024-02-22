import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book125UpdateComponent } from './book125-update.component';

describe('Book125UpdateComponent', () => {
  let component: Book125UpdateComponent;
  let fixture: ComponentFixture<Book125UpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Book125UpdateComponent]
    });
    fixture = TestBed.createComponent(Book125UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
