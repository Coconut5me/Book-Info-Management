import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Books125Component } from './books125.component';

describe('Books125Component', () => {
  let component: Books125Component;
  let fixture: ComponentFixture<Books125Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Books125Component]
    });
    fixture = TestBed.createComponent(Books125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
