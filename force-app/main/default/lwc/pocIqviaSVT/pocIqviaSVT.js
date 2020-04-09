import { LightningElement, api, track } from 'lwc';

const columns = [
    {
        type: 'url',
        fieldName: 'subjectId',
        label: 'Subject ID',
    },
    {
        type: 'text',
        fieldName: 'status',
        label: 'Status',
    },
];

const data = 

export default class PocIqviaSVT extends LightningElement {
    @api title;
    @api icon = "standard:user";
    @api flexipageRegionWidth;
    @track recordNum = 4;
    @track svtColumns = columns;
    @track svtData = data;
}