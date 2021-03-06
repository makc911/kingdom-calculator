import {IBuilding, IResearchMultiplier} from '../interfaces/research.interface';

export const BUILDINGS: Array<IBuilding> = [
    {
        key: 'foragingHut',
        title: 'Foraging Hut',
        baseCost: 3.890900E+11,
        researchCost: 3.890900E+11,
        type: 'food',
        progress: 0,
        currentLevel: 1,
        minLevel: 1,
    },
    {
        key: 'foodStore',
        title: 'FoodStore',
        baseCost: 583630000000,
        researchCost: 583630000000,
        type: 'food',
        progress: 0,
        currentLevel: 1,
        minLevel: 1,
    },
    {
        key: 'winery',
        title: 'Winery',
        baseCost: 33993273973.465,
        researchCost: 33993273973.465,
        type: 'food',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'hunter',
        title: 'Hunter',
        baseCost: 544823706150.055,
        researchCost: 544823706150.055,
        type: 'food',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'farm',
        title: 'Farm',
        baseCost: 1.56069E+25,
        researchCost: 1.56069E+25,
        type: 'food',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'herbalistHut',
        title: 'Herbalist Hut',
        baseCost: 2.744140625E+33,
        researchCost: 2.744140625E+33,
        type: 'food',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'fisherman',
        title: 'Fisherman',
        baseCost: 7.225E+22,
        researchCost: 7.225E+22,
        type: 'food',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'bakery',
        title: 'Bakery',
        baseCost: 7.546875E+34,
        researchCost: 7.546875E+34,
        type: 'food',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'stockpile',
        title: 'Stockpile',
        baseCost: 5.84405E+13,
        researchCost: 5.84405E+13,
        type: 'material',
        progress: 0,
        currentLevel: 1,
        minLevel: 1,
    },
    {
        key: 'woodcutter',
        title: 'Woodcutter',
        baseCost: 38910000000000,
        researchCost: 38910000000000,
        type: 'material',
        progress: 0,
        currentLevel: 1,
        minLevel: 1,
    },
    {
        key: 'clayPit',
        title: 'Clay Pit',
        baseCost: 2719389158301.06,
        researchCost: 2719389158301.06,
        type: 'material',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'sawmill',
        title: 'Saw Mill',
        baseCost: 34050000000000,
        researchCost: 34050000000000,
        type: 'material',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'quarry',
        title: 'Quarry',
        baseCost: 28870999813079800000,
        researchCost: 28870999813079800000,
        type: 'material',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'kiln',
        title: 'Kiln',
        baseCost: 4.3359375E+27,
        researchCost: 4.3359375E+27,
        type: 'material',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'foresterLodge',
        title: 'Forester Lodge',
        baseCost: 8.4296E+29,
        researchCost: 8.4296E+29,
        type: 'material',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'bridgeBuilding',
        title: 'Bridge Building',
        baseCost: 2.02178955078125E+27,
        researchCost: 2.02178955078125E+27,
        type: 'material',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'Library',
        title: 'Library',
        baseCost: 5836486816406250,
        researchCost: 5836486816406250,
        type: 'science',
        progress: 0,
        currentLevel: 1,
        minLevel: 1,
    },
    {
        key: 'shaman',
        title: 'Shaman',
        baseCost: 3890991210937500,
        researchCost: 3890991210937500,
        type: 'science',
        progress: 0,
        currentLevel: 1,
        minLevel: 1,
    },
    {
        key: 'adeptShack',
        title: 'Adept Shack',
        baseCost: 3404617309570310,
        researchCost: 3404617309570310,
        type: 'science',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'paperMill',
        title: 'Paper Mill',
        baseCost: 272393226623535,
        researchCost: 272393226623535,
        type: 'science',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'outcastHovel',
        title: 'Outcast Hovel',
        baseCost: 6.2425E+36,
        researchCost: 6.2425E+36,
        type: 'science',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'bookbinder',
        title: 'Bookbinder',
        baseCost: 1609497070312500000,
        researchCost: 1609497070312500000,
        type: 'science',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'squidFisher',
        title: 'Squid Fisher',
        baseCost: 1.1994E+26,
        researchCost: 1.1994E+26,
        type: 'science',
        progress: 0,
        currentLevel: 1,
    },
    {
        key: 'university',
        title: 'University',
        baseCost: 3620000000000000,
        researchCost: 3620000000000000,
        type: 'science',
        progress: 0,
        currentLevel: 1,
        minLevel: 1,
        maxLevel: 4,
        levelsCost: {
            1: 3620000000000000,
            2: 6.628E+25,
            3: 1.0987E+35,
            4: 3.92E+48,
        }
    },


];

export const NUMBERS_KEYS = {
    0: '',
    3: 'k',
    6: 'm',
    9: 'b',
    12: 't',
    15: 'aa',
    18: 'ab',
    21: 'ac',
    24: 'ad',
    27: 'ae',
    30: 'af',
    33: 'ag',
    36: 'ah',
    39: 'ai',
    42: 'aj',
    45: 'ak',
    48: 'al',
    51: 'am',
    54: 'an',
    57: 'ao',
    60: 'ap',
    63: 'aq',
    66: 'ar',
    69: 'as',
    72: 'as',
    75: 'at',
    78: 'au',
    81: 'av',
    84: 'aw',
    87: 'ax',
    90: 'ay',
    93: 'az',
    96: 'ba',
    99: 'bb',
    102: 'bc',
    105: 'bd',
    108: 'be',
    111: 'bf',
    114: 'bg',
    117: 'bh',
    120: 'bi',

};

// @ts-ignore
export const KEYS_EXPONENT = Object.fromEntries(
    Object.entries(NUMBERS_KEYS).map(([key, value]) => [value, key])
);

export const RESEARCH_MULTIPLIERS: Array<IResearchMultiplier> = [
    {
        mod10: 0,
        value: 1.6,
        changeMulti: 0.5,
    },
    {
        mod10: 1,
        value: 16,
        changeMulti: 1,
    },
    {
        mod10: 2,
        value: 16,
        changeMulti: 1,
    },
    {
        mod10: 3,
        value: 16,
        changeMulti: 1,
    },
    {
        mod10: 4,
        value: 16,
        changeMulti: 1,
    },
    {
        mod10: 5,
        value: 16,
        changeMulti: 1,
    },
    {
        mod10: 6,
        value: 16,
        changeMulti: 1,
    },
    {
        mod10: 7,
        value: 16,
        changeMulti: 1,
    },
    {
        mod10: 8,
        value: 16,
        changeMulti: 1,
    },
    {
        mod10: 9,
        value: 160,
        changeMulti: 2,
    },
];
