import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleaiComponent } from './googleai.component';

describe('GoogleaiComponent', () => {
  let component: GoogleaiComponent;
  let fixture: ComponentFixture<GoogleaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleaiComponent]
    });
    fixture = TestBed.createComponent(GoogleaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
