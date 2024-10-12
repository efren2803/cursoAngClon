import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHolaComponent } from './comp-hola.component';

describe('CompHolaComponent', () => {
  let component: CompHolaComponent;
  let fixture: ComponentFixture<CompHolaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompHolaComponent]
    });
    fixture = TestBed.createComponent(CompHolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
