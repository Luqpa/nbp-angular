import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyqueryOptionspanelComponent } from './currencyquery-optionspanel.component';

describe('CurrencyqueryOptionspanelComponent', () => {
  let component: CurrencyqueryOptionspanelComponent;
  let fixture: ComponentFixture<CurrencyqueryOptionspanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyqueryOptionspanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyqueryOptionspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
