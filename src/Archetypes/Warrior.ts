import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private energyTyp: EnergyType;
  static archeInstance = 0;
      
  constructor(name: string) {
    super(name);
    Warrior.archeInstance += 1;
    this.energyTyp = 'stamina';
  }
      
  get energyType(): EnergyType { 
    return this.energyTyp; 
  }
      
  static createdArchetypeInstances(): number {
    if (Warrior.archeInstance === 0) {
      throw new Error('Not implemented');
    }
    return this.archeInstance;
  }
}