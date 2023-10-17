import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailTodoComponent } from './client-detail-todo.component';

describe('ClientDetailTodoComponent', () => {
  let component: ClientDetailTodoComponent;
  let fixture: ComponentFixture<ClientDetailTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDetailTodoComponent]
    });
    fixture = TestBed.createComponent(ClientDetailTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
