export interface IBuilding {
    key: string;
    icon?: string;
    title: string;
    baseCost: number;
    researchCost?: number;
    type: 'science' | 'material' | 'food';
    currentLevel?: number;
    targetLevel?: number;
    progress: number;
    researchSeconds?: number;
    researchDuration?: number;
    costAA?: string;
    costE?: string;
    minLevel?: number;
    maxLevel?: number;
}

export interface IResearchMultiplier {
    mod10: number;
    value: number;
    changeMulti: number;
}

export interface IStoredResearchData {
    university: string;
    isTargetLevelShown: boolean;
    buildings: Array<IStoredBuilding>;
}

export interface IStoredBuilding {
    key: string;
    currentLevel: number;
    targetLevel?: number;
    progress?: number;
}
