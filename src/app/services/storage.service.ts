import { Injectable } from '@angular/core';
import {IBuilding, IStoredBuilding, IStoredResearchData} from '../interfaces/research.interface';

const STORAGE_KEY = 'researchUserData';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class StorageService {

  constructor() { }

  public getResearchUserData(): IStoredResearchData {
    const storedData = localStorage.getItem(STORAGE_KEY);
    try {
      return JSON.parse(storedData);
    } catch (e) {
      return null;
    }
  }

  public storeResearchUserData(data: {buildings: Array<IBuilding>, university: string, isTargetLevelShown: boolean}): void {
    const dataToSave = {
      university: data.university,
      isTargetLevelShown: data.isTargetLevelShown,
      buildings: this.getLevelData(data.buildings)
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }

  private getLevelData(buildings: Array<IBuilding>): Array<IStoredBuilding> {
    return buildings.map(item => ({
      key: item.key,
      currentLevel: item.currentLevel,
      targetLevel: item.targetLevel,
      progress: item.progress,
    }));
  }
}
