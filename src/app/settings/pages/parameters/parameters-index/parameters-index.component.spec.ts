import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersIndexComponent } from './parameters-index.component';

describe('ParametersIndexComponent', () => {
  let component: ParametersIndexComponent;
  let fixture: ComponentFixture<ParametersIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParametersIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
