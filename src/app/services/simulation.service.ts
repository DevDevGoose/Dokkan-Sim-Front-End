import { Injectable } from '@angular/core';
import { ICharacter } from '../models/ICharacter';
import { CombatCharacter } from '../models/ICharacter';
import { ITeamSettings } from '../models/ITeamSettings';
import { ISimulationSettings } from '../models/ISimulationSettings';
import { links } from 'src/assets/links';

export class SimulationService {
  results = [];
  teamCharacterArray: CombatCharacter[];
  enemyCharacterArray = [];
  teamRotationArray = [];
  singleTeamSettings: ITeamSettings;

  simulationSettings: ISimulationSettings;


  constructor(teamCharacterArray: CombatCharacter[], simulationSettings: ISimulationSettings,
    // tslint:disable-next-line: align
    enemyCharacterArray: CombatCharacter[], teamSettings?: ITeamSettings) {
    this.teamCharacterArray = teamCharacterArray;
    this.simulationSettings = simulationSettings;
    this.enemyCharacterArray = enemyCharacterArray;
    if (teamSettings !== undefined) {
      this.singleTeamSettings = teamSettings;
    }
  }


  simulate() {
    if (this.simulationSettings.SimulationType === 'Single') {
      this.results.push({ character: this.teamCharacterArray[0] });
      this.populateSingleTeamArray();
    } else if (this.simulationSettings.SimulationType === 'Team') {
      this.results.push(this.teamCharacterArray);
      // TODO
    }
    if (this.enemyCharacterArray.length === 0) {
      this.populateEnemyTeamArray();
    }


    // Loop to repeat the simulation the requested number of times
    for (let repetition = 1; repetition <= this.simulationSettings.NumberOfRepetitions; repetition++) {
      const repetitionResults = [];

      // Loop for each turn
      for (let turn = 1; turn <= this.simulationSettings.NumberOfTurns; turn++) {
        const turnResults = [];
        this.teamCharacterArray.forEach(character => {
          character.startOfTurn(this);
        });


      }
      // END Turn Loop
      this.results.push(repetitionResults);

    }
    // END Repetition Loop

    return this.results;
  }


  createDummyTeammate(activeLinksArray: []) {
    const dummyTeammate: ICharacter = {
      Name: 'Dummy Teammate 1',
      Title: 'Dummy 1',
      ImageSRC: '',
      MaxLevel: 120,
      MaxSA: 20,
      Type: '',
      Class: '',
      Cost: 0,
      ID: 0,
      MaxHP: 0,
      MaxATK: 0,
      MaxDEF: 0,
      LinkSkills: activeLinksArray,
      Categories: [],
      HiddenPotentialRank: 'C',
      Ki12MultiplierString: 0,
      transforms: false
    };
    const combatTeammate = new CombatCharacter(dummyTeammate);

    return combatTeammate;
  }

  populateSingleTeamArray() {
    switch (this.singleTeamSettings.CharacterPosition) {
      case 1:
        for (let i = 0; i < 6; i++) {
          this.teamCharacterArray.push(this.createDummyTeammate(this.singleTeamSettings.ActiveLinks));
        }
        break;
      case 2:
        this.teamCharacterArray.unshift(this.createDummyTeammate(this.singleTeamSettings.ActiveLinks));
        for (let i = 0; i < 5; i++) {
          this.teamCharacterArray.push(this.createDummyTeammate(this.singleTeamSettings.ActiveLinks));
        }
        break;
      case 3:
        this.teamCharacterArray.unshift(this.createDummyTeammate(this.singleTeamSettings.ActiveLinks));
        this.teamCharacterArray.unshift(this.createDummyTeammate(this.singleTeamSettings.ActiveLinks));
        for (let i = 0; i < 4; i++) {
          this.teamCharacterArray.push(this.createDummyTeammate(this.singleTeamSettings.ActiveLinks));
        }
        break;
      default:
        break;
    }
    this.teamCharacterArray[5].leader = true;
    this.teamCharacterArray[5].leaderSkill = this.singleTeamSettings.LeaderSkill1;
    this.teamCharacterArray[6].leader = true;
    this.teamCharacterArray[6].leaderSkill = this.singleTeamSettings.LeaderSkill2;
  }
  populateEnemyTeamArray() {

  }
}
