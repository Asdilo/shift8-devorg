import { LightningElement, api, track } from 'lwc';

const fakeData = [
    {kpiTitle:'Screened', kpiVal: 124, kpiChange: 56},
    {kpiTitle:'Screen Failed', kpiVal: 69, kpiChange: 15},
    {kpiTitle:'Randomized', kpiVal: 19, kpiChange: 8},
    {kpiTitle:'Completed', kpiVal: 355, kpiChange: 105},
    {kpiTitle:'Discontinued', kpiVal: null, kpiChange: 0},
    {kpiTitle:'Other KPI', kpiVal: 18, kpiChange: 6},
];

export default class DataHighlights extends LightningElement {
    @api title;
    @api icon;
    @api classes;
    @api showIcon
    @api kpiText;
    @track kpiData = fakeData;
    @api flexipageRegionWidth;
}