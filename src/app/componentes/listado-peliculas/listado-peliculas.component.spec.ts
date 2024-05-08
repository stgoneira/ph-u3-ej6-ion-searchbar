import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListadoPeliculasComponent } from './listado-peliculas.component';

describe('ListadoPeliculasComponent', () => {
  let component: ListadoPeliculasComponent;
  let fixture: ComponentFixture<ListadoPeliculasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListadoPeliculasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
