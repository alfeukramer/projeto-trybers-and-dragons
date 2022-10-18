import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static raceInstance = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.raceInstance += 1;
  }
    
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static createdRacesInstances(): number {
    if (Orc.raceInstance === 0) {
      throw new Error('Not implemented');
    }
    return this.raceInstance;
  }
}