import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBSOComponent } from './about-bso.component';

describe('AboutBSOComponent', () => {
  let component: AboutBSOComponent;
  let fixture: ComponentFixture<AboutBSOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBSOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
