import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionesComponent } from './recomendaciones.component';

describe('RecomendacionesComponent', () => {
  let component: RecomendacionesComponent;
  let fixture: ComponentFixture<RecomendacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecomendacionesComponent]
    });
    fixture = TestBed.createComponent(RecomendacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
