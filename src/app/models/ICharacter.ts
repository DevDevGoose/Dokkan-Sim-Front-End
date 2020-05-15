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