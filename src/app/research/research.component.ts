import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BUILDINGS, KEYS_EXPONENT, NUMBERS_KEYS} from '../data/research.constant';
import {IBuilding} from '../interfaces/research.interface';
import {MatTableDataSource} from '@angular/material/table';
import {HelperService} from '../services/helper.service';
import * as moment from 'moment';
import {MatSort} from '@angular/material/sort';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  public buildingsData;
  public displayedColumns: Array<string>;
  public universitySpeed: string = null;

  private uniSpeedNumber: number;
  private buildings: Array<IBuilding> = [...BUILDINGS];
  private readonly timeMarkers = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];

  constructor(
      private helper: HelperService,
      private storageService: StorageService,
  ) {
    this.buildingsData = new MatTableDataSource<IBuilding>(this.buildings);
    this.displayedColumns = ['title', 'currentLevel', 'type', 'costAA', 'costE', 'researchSeconds', 'researchDuration'];
  }

  public onLevelChanged(building: IBuilding): void {
    if (building.currentLevel < 1) {
      building.currentLevel = 1;
    }
    if (building.currentLevel > 60) {
      building.currentLevel = 60;
    }

    this.calculateResearch(building);
  }

  public onUniSpeedChange(): void {
    this.uniSpeedNumber = this.helper.transformFromAAFormat(this.universitySpeed);
    this.calculateResearchesTime();
  }

  public onSaveBtnClick(): void {
    this.storageService.storeResearchUserData({buildings: this.buildings, university: this.universitySpeed});
  }

  public onResetBtnClick(): void {
    this.buildings.forEach(building => building.currentLevel = 1);
    this.universitySpeed = null;
    this.onUniSpeedChange();
  }

  public getScienceNumber(cost: number): string {
    return Number.parseFloat(String(cost)).toExponential(3);
  }

  public getTimeInSeconds(seconds: number): string {
    if (!seconds) {
      return '--';
    }
    return (seconds || 0) < 1 ? 'less then 1s' : this.getScienceNumber(seconds) + 's';
  }

  public getTimeDuration(seconds: number): string {
    if (!seconds) {
      return '----';
    }
    const duration = moment.duration(seconds, 's');

    const result = this.timeMarkers.reduce((acc, marker) => {
      // @ts-ignore
      const value = duration._data[marker];
      acc += !value && !acc ? '' : `${value > 99999 ? this.getScienceNumber(value) : value} ${marker} `;
      return acc;
    }, '')
        .replace(' seconds', 's')
        .replace(' minutes', 'm')
        .replace(' hours', 'h');

    return result || 'less then 1s';
  }

  public getTypeImagePath(type: string): string {
    return `../../assets/images/${type}-type.jpg`;
  }

  public isUniversitySpeedValid(): boolean {
    return this.universitySpeed === null ? true : !!this.uniSpeedNumber;
  }

  ngOnInit(): void {
    const d = this.storageService.getResearchUserData();
    this.provideStoredUserData();
    this.onUniSpeedChange();
    this.calculateResearchesTime();
  }

  ngAfterViewInit(): void {
    this.buildingsData.sort = this.sort;
  }

  private provideStoredUserData(): void {
    const storedData = this.storageService.getResearchUserData();
    if (!storedData) {
      return;
    }

    this.universitySpeed = storedData.university || null;
    this.buildings.forEach(building => {
      const stored = storedData.buildings.find(e => e.key === building.key);
      if (stored) {
        building.progress = stored.progress || 0;
        building.currentLevel = stored.currentLevel || 1;
      }
    });
  }

  private calculateResearchesTime(): void {
    this.buildings.forEach(building => {
      this.calculateResearch(building);
    });
  }

  private calculateResearch(building: IBuilding): void {
    building.researchCost = this.helper.getResearchCost(building);
    building.costAA = this.helper.transformToAAFormat(building.researchCost);
    building.costE = this.getScienceNumber(building.researchCost);

    if (!this.uniSpeedNumber) {
      building.researchSeconds = null;
      building.researchDuration = null;
      return;
    }

    const seconds = (building.researchCost || 0) / this.uniSpeedNumber;
    // const duration = moment.duration(seconds, 's');
    //
    // const result = this.timeMarkers.reduce((acc, marker) => {
    //   // @ts-ignore
    //   const value = duration._data[marker];
    //   acc += !value && !acc ? '' : `${value > 99999 ? this.getScienceNumber(value) : value} ${marker} `;
    //   return acc;
    // }, '')
    //     .replace(' seconds', 's')
    //     .replace(' minutes', 'm')
    //     .replace(' hours', 'h');

    building.researchSeconds =  seconds;
    building.researchDuration = seconds;
  }
}
