import { LightningElement, api} from 'lwc';
import Evisort_Resources from '@salesforce/resourceUrl/Evisort';


export default class EvisortRecordPOC extends LightningElement {

    @api title;
    iconSvgUrl = Evisort_Resources + '/evisortResources/evisortIcon.svg#colorIcon';
    activeSections = ['A', 'B', 'C'];


    get options() {
        return [
            { label: 'First', value: 'first' },
            { label: 'Second', value: 'second' },
            { label: 'Third', value: 'third' },
        ];
    }
}