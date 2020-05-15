import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSingleCustomisationComponent } from './character-single-customisation.component';

describe('CharacterSingleCustomisationComponent', () => {
  let component: CharacterSingleCustomisationComponent;
  let fixture: ComponentFixture<CharacterSingleCustomisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSingleCustomisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSingleCustomisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
