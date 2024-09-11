import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlDetalleComponent } from './pl-detalle.component';

describe('PlDetalleComponent', () => {
  let component: PlDetalleComponent;
  let fixture: ComponentFixture<PlDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
