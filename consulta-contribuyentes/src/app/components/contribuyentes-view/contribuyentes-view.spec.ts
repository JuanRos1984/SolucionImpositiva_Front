import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuyentesView } from './contribuyentes-view';

describe('ContribuyentesView', () => {
  let component: ContribuyentesView;
  let fixture: ComponentFixture<ContribuyentesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContribuyentesView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContribuyentesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
