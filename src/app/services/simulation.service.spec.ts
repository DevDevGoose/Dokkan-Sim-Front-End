import { TestBed } from '@angular/core/testing';

import { SimulationService } from './simulation.service';
import { ICharacter, CombatCharacter } from '../models/ICharacter';

fdescribe('SimulationService', () => {
  let service: SimulationService;
  let testCharacter: ICharacter = {
    Name: 'Super Saiyan Trunks (Future) TEST CHANGES',
    Title: 'A Gift From the Past',
    // tslint:disable-next-line: max-line-length
    ImageSRC: 'https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/c/c7/Thumb_1014040.png/revision/latest/scale-to-width-down/120?cb=20181212001520',
    MaxLevel: 120,
    MaxSA: 20,
    Type: 'AGL',
    Class: 'Super',
    Cost: 38,
    ID: 11404,
    MaxHP: 6592,
    MaxATK: 9154,
    MaxDEF: 4771,
    LinkSkills: [
      'Messenger from the Future',
      'Super Saiyan',
      'Cold Judgment',
      'Royal Lineage',
      'Dismal Future',
      'Shattering the Limit'
    ],
    Categories: [
      'Hybrid Saiyans',
      'Future Saga',
      'Time Travelers',
      'Vegeta\'s Family',
      'Super Saiyans',
      'Androids/Cell Saga',
      'Bond of Master and Disciple',
      'Revenge'
    ],
    HiddenPotentialRank: 'A',
    Ki12MultiplierString: 140,
    transforms: false
  };
  let testCombatCharacter = new CombatCharacter(testCharacter);


  beforeAll(() => {

  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulationService);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array', () => {

  });

});

