import { ICharacter } from './ICharacter';

export interface ITeamSettings {

    CharacterPosition: number;
    ActiveLinks: [];
    LeaderSkill1(character: ICharacter): void;
    LeaderSkill2(character: ICharacter): void;

}
