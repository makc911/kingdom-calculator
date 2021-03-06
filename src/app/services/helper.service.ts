import { Injectable } from '@angular/core';
import {KEYS_EXPONENT, NUMBERS_KEYS, RESEARCH_MULTIPLIERS} from '../data/research.constant';
import {IBuilding} from '../interfaces/research.interface';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class HelperService {

  constructor() { }

  public getResearchForTarget(building: IBuilding): number {
    const levels = [... new Array(building.targetLevel - building.currentLevel)].map((i, index) => index + building.currentLevel);
    return levels.reduce((acc, level) => {
      return acc + this.getResearchCost({...building, currentLevel: level});
    }, 0);
  }

  public getResearchCost(building: IBuilding): number {
    if (Number(building.currentLevel) === 0) {
      return building.baseCost / 256;
    }
    if (building.levelsCost && building.levelsCost[building.currentLevel]) {
      return building.levelsCost[building.currentLevel];
    }
    return [... Array(building.currentLevel)].map((e, i) => i + 1).reduce((acc, l) => {
      const mod = l % 10;
      const pow = Math.floor((l - 1) / 10);
      const mul = RESEARCH_MULTIPLIERS[mod];
      return l === 1
          ? building.baseCost
          : acc * mul.value * Math.pow(mul.changeMulti, pow);
    }, 0);
  }

  public transformToAAFormat(value: number): string {
    if (!value) {
      return '-';
    }
    const log = Math.floor(Math.log10(value));
    const type = NUMBERS_KEYS[log - log % 3];
    if (!type) {
      return '-';
    }
    return `${(value / Math.pow(10, log - log % 3)).toFixed(2)}${type}`;
  }

  public transformFromAAFormat(value: string): number {
    if (Number(value) === Number(value)) {
      return Number(value);
    }
    if (!/^[0-9]+\D{1,3}&/) {
      return 0;
    }

    const pos = value.search(/[^\d.]/);
    const num = Number(value.slice(0, pos));
    const str = value.slice(pos);

    if (!str || KEYS_EXPONENT[str] === undefined) {
      return 0;
    }

    return num * Math.pow(10, KEYS_EXPONENT[str] || 1);
  }
}
