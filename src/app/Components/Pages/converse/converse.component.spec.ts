import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverseComponent } from './converse.component';

describe('ConverseComponent', () => {
  let component: ConverseComponent;
  let fixture: ComponentFixture<ConverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConverseComponent]
    });
    fixture = TestBed.createComponent(ConverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
