import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAccuracyComponent } from './element-accuracy.component';

describe('ElementAccuracyComponent', () => {
  let component: ElementAccuracyComponent;
  let fixture: ComponentFixture<ElementAccuracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementAccuracyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementAccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
