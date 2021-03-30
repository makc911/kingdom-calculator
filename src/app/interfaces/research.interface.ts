export interface IBuilding {
    key: string;
    title: string;
    baseCost: number;
    researchCost?: number;
    type: 'science' | 'material' | 'food';
    currentLevel?: number;
}
