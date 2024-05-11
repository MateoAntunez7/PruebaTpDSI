import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBodegasComponent } from './menu-bodegas.component';

describe('MenuBodegasComponent', () => {
  let component: MenuBodegasComponent;
  let fixture: ComponentFixture<MenuBodegasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBodegasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBodegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
