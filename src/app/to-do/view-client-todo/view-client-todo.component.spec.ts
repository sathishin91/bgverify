import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientTodoComponent } from './view-client-todo.component';

describe('ViewClientTodoComponent', () => {
  let component: ViewClientTodoComponent;
  let fixture: ComponentFixture<ViewClientTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewClientTodoComponent]
    });
    fixture = TestBed.createComponent(ViewClientTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
