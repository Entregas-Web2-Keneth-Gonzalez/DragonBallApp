import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlComponent } from './detail-pl.component';

describe('DetailPlComponent', () => {
  let component: DetailPlComponent;
  let fixture: ComponentFixture<DetailPlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
