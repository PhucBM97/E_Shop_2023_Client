import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBalanceComponent } from './new-balance.component';

describe('NewBalanceComponent', () => {
  let component: NewBalanceComponent;
  let fixture: ComponentFixture<NewBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBalanceComponent]
    });
    fixture = TestBed.createComponent(NewBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
