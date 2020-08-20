import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelectedinfoboxComponent } from './currency-selectedinfobox.component';

describe('CurrencySelectedinfoboxComponent', () => {
  let component: CurrencySelectedinfoboxComponent;
  let fixture: ComponentFixture<CurrencySelectedinfoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencySelectedinfoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencySelectedinfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
