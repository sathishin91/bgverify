import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChecksComponent } from './delete-checks.component';

describe('DeleteChecksComponent', () => {
  let component: DeleteChecksComponent;
  let fixture: ComponentFixture<DeleteChecksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteChecksComponent]
    });
    fixture = TestBed.createComponent(DeleteChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
