import { LightningElement, api, track } from 'lwc';

export default class PocIqviaSVP extends LightningElement {
    @api title;
    @api icon = "standard:opportunity";
    @api classes = "";
    @track radioVal = '';

    get radioOpt() {
        return [
            { label: 'Sun', value: 'sunday' },
            { label: 'Mon', value: 'monday' },
            { label: 'Tue', value: 'tuesday' },
            { label: 'Wed', value: 'wednesday' },
            { label: 'Thu', value: 'thursday' },
            { label: 'Fri', value: 'friday' },
            { label: 'Sat', value: 'saturday' },
        ];
    }
}