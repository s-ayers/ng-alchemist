import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchemistAsideComponent } from './alchemist-aside.component';

describe('AlchemistAsideComponent', () => {
  let component: AlchemistAsideComponent;
  let fixture: ComponentFixture<AlchemistAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlchemistAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlchemistAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
