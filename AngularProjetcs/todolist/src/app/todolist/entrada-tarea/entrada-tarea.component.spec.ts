import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaTareaComponent } from './entrada-tarea.component';

describe('EntradaTareaComponent', () => {
  let component: EntradaTareaComponent;
  let fixture: ComponentFixture<EntradaTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
