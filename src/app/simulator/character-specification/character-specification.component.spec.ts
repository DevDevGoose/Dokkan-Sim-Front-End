import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSpecificationComponent } from './character-specification.component';

describe('CharacterSpecificationComponent', () => {
  let component: CharacterSpecificationComponent;
  let fixture: ComponentFixture<CharacterSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
