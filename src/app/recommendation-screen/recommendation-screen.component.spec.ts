import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationScreenComponent } from './recommendation-screen.component';

describe('RecommendationScreenComponent', () => {
  let component: RecommendationScreenComponent;
  let fixture: ComponentFixture<RecommendationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
