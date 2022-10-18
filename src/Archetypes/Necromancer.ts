import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private energyTyp: EnergyType;
  static archeInstance = 0;
  
  constructor(name: string) {
    super(name);
    Necromancer.archeInstance += 1;
    this.energyTyp = 'mana';
  }
  
  get energyType(): EnergyType { 
    return this.energyTyp; 
  }
  
  static createdArchetypeInstances(): number {
    if (Necromancer.archeInstance === 0) {
      throw new Error('Not implemented');
    }
    return this.archeInstance;
  }
}