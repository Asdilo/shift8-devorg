import { LightningElement, api, track } from 'lwc';

const results = [
    {uniqueId:'A',experimentName:'Cool Name Here Yall', experimenLink: 'https://www.optimizely.com', variationName:'CHeeseburger', dateTime: 1547250828000},

    {uniqueId:'B',experimentName:'Cool Name Here Yall', experimenLink: 'https://www.optimizely.com', variationName:'CHeeseburger', dateTime: 1547250828000},
];
export default class TileList extends LightningElement {
    @api title;
    @api icon;

    @track results = results;

}