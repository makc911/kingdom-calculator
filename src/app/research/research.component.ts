import { Component, OnInit } from '@angular/core';
import {BUILDINGS} from '../data/research.constant';
import {IBuilding} from '../interfaces/research.interface';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  private buildings: Array<IBuilding> = [...BUILDINGS];
  public buildingsData;
  public displayedColumns: Array<string>;

  constructor() {
    this.buildingsData = new MatTableDataSource<IBuilding>(this.buildings);
    this.displayedColumns = ['building', 'currentLevel', 'type', 'costAA'];
  }

  public onLevelChanged(building: IBuilding): void {
    console.log('New value has been set', building);
  }

  ngOnInit(): void {
  }

}
