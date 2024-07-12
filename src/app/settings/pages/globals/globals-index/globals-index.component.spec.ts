import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalsIndexComponent } from './globals-index.component';

describe('GlobalsIndexComponent', () => {
  let component: GlobalsIndexComponent;
  let fixture: ComponentFixture<GlobalsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
