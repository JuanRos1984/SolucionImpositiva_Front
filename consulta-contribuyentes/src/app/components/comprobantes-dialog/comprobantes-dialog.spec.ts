import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesDialog } from './comprobantes-dialog';

describe('ComprobantesDialog', () => {
  let component: ComprobantesDialog;
  let fixture: ComponentFixture<ComprobantesDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprobantesDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobantesDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
