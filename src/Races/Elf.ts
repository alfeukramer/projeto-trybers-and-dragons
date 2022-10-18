import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.raceInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    if (Elf.raceInstance === 0) {
      throw new Error('Not implemented');
    }
    return this.raceInstance;
  }
}