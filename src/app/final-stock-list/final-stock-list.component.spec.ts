import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalStockListComponent } from './final-stock-list.component';

describe('FinalStockListComponent', () => {
  let component: FinalStockListComponent;
  let fixture: ComponentFixture<FinalStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalStockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
