import { LightningElement, api, track } from 'lwc';
import {upcomingData} from './mockData'
import {pastData} from './mockData'


export default class PocPEvisits extends LightningElement {

    @api icon;
    @api title;
    @api cta;
    @api btntxt;
    @api height;
    //@track style = '"height: ' + PocPEvisits.height +'px;"'
    @track data = upcomingData;
    @track past = pastData;
    @track filterVals = 'all';
    @track isModalOpen = false; //Modal state
    @track selectedVisit = '1'; //State of which visit is selected


    get options() {
        return [
            { label: 'Show All', value: 'all' },
            { label: 'Show Scheduled', value: 'scheduled' },
            { label: 'Show Unscheduled', value: 'unscheduled' },
        ];
    }
    select(event) {
        // 
        var targetKey = event.currentTarget.getAttribute("id");
        this.selectedVisit = targetKey;
        console.log(this.selectedVisit);
    }

    modalOpen() {
        // Open modal
        this.isModalOpen = true;
    }
  
    modalClose() {
        // Close modal
        this.isModalOpen = false;
    }

}