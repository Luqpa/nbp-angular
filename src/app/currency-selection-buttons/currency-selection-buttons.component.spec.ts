import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelectionButtonsComponent } from './currency-selection-buttons.component';

describe('CurrencySelectionButtonsComponent', () => {
  let component: CurrencySelectionButtonsComponent;
  let fixture: ComponentFixture<CurrencySelectionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencySelectionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencySelectionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
