import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSelectionDialogComponent } from './character-selection-dialog.component';

describe('CharacterSelectionDialogComponent', () => {
  let component: CharacterSelectionDialogComponent;
  let fixture: ComponentFixture<CharacterSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
