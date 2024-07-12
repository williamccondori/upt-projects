import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalsEditComponent } from './globals-edit.component';

describe('GlobalsEditComponent', () => {
  let component: GlobalsEditComponent;
  let fixture: ComponentFixture<GlobalsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
