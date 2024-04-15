import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAccuracyComponent } from './document-accuracy.component';

describe('DocumentAccuracyComponent', () => {
  let component: DocumentAccuracyComponent;
  let fixture: ComponentFixture<DocumentAccuracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentAccuracyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentAccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
