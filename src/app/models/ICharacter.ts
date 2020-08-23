import { SimulationService } from '../services/simulation.service';

export interface ICharacter {
    Name: string;
    Title: string;
    ImageSRC: string;
    MaxLevel: number;
    MaxSA: number;
    Type: string;
    Class: string;
    Cost: number;
    ID: number;
    MaxHP: number;
    MaxATK: number;
    MaxDEF: number;
    LinkSkills: string[];
    Categories: string[];
    HiddenPotentialRank: string;
    Ki12MultiplierString: number;
    transforms: boolean;
}

export class CombatCharacter implements ICharacter {

    percLeaderBoost = 1;
    flatLeaderBoost = 0;

    percStartBoost = 1;
    flatStartBoost = 0;

    teamLeaderSkills = [];
    startOfTurnSkills = [];
    buildUpPassiveSkills = [];
    onAttackSkills = [];
    rotationId = 0;

    Name: string;
    Title: string;
    ImageSRC: string;
    MaxLevel: number;
    MaxSA: number;
    Type: string;
    Class: string;
    Cost: number;
    ID: number;
    MaxHP: number;
    MaxATK: number;
    MaxDEF: number;
    LinkSkills: string[];
    Categories: string[];
    HiddenPotentialRank: string;
    Ki12MultiplierString: number;
    transforms: boolean;
    leader: boolean;
    leaderSkill: (CombatCharacter) => void;

    constructor(character: ICharacter) {
        this.Name = character.Name;
        this.Title = character.Title;
        this.ImageSRC = character.ImageSRC;
        this.MaxLevel = character.MaxLevel;
        this.MaxSA = character.MaxSA;
        this.Type = character.Type;
        this.Class = character.Class;
        this.Cost = character.Cost;
        this.ID = character.ID;
        this.MaxHP = character.MaxHP;
        this.MaxATK = character.MaxATK;
        this.MaxDEF = character.MaxDEF;
        this.LinkSkills = character.LinkSkills;
        this.Categories = character.Categories;
        this.HiddenPotentialRank = character.HiddenPotentialRank;
        this.Ki12MultiplierString = character.Ki12MultiplierString;
        this.transforms = character.transforms;

    }

    runTeamLeaderSkills() {
        this.teamLeaderSkills.forEach(teamLeaderSkill => {
            teamLeaderSkill();
        });
    }

    startOfTurn(gameState: SimulationService) {

    }

    runStartOfTurnSkills() {
        this.startOfTurnSkills.forEach(startOfTurnSkill => {
            startOfTurnSkill();
        });
    }

    runBuildUpPassiveSkills(gameState: SimulationService) {
        this.startOfTurnSkills.forEach(startOfTurnSkill => {
            startOfTurnSkill();
        });
    }

    runOnAttackSkills() {
        this.startOfTurnSkills.forEach(startOfTurnSkill => {
            startOfTurnSkill();
        });
    }

    attack() {

    }

    addStartOfTurnSkill(effectArray: []) {
        this.startOfTurnSkills.push(effectArray);
    }

    addTeamLeaderSkill() {

    }

    addBuildUpPassiveSkill() {

    }

    addOnAttackSkill() {

    }

    addOnSuperAttackSkill() {

    }

    resetCharacterCombat(character: CombatCharacter) {
        character.percLeaderBoost = 1;
        character.flatLeaderBoost = 0;
        character.percStartBoost = 1;
        character.flatStartBoost = 0;
        return character;
    }
}
