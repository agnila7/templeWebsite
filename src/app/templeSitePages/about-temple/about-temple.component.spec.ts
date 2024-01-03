import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTempleComponent } from './about-temple.component';

describe('AboutTempleComponent', () => {
  let component: AboutTempleComponent;
  let fixture: ComponentFixture<AboutTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
