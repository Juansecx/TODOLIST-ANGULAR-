import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaTareaComponent } from './salida-tarea.component';

describe('SalidaTareaComponent', () => {
  let component: SalidaTareaComponent;
  let fixture: ComponentFixture<SalidaTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalidaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
