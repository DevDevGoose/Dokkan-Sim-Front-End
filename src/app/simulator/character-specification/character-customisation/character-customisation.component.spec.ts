import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCustomisationComponent } from './character-customisation.component';

describe('CharacterCustomisationComponent', () => {
  let component: CharacterCustomisationComponent;
  let fixture: ComponentFixture<CharacterCustomisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCustomisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCustomisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
