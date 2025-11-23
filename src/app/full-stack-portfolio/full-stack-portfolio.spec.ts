import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackPortfolio } from './full-stack-portfolio';

describe('FullStackPortfolio', () => {
  let component: FullStackPortfolio;
  let fixture: ComponentFixture<FullStackPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullStackPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullStackPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
