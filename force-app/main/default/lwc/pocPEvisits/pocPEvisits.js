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
    @track selectedVisit = ''; //State of which visit is selected
    @track selectedDetails = [];
    
    get options() {
        return [
            { label: 'Show All', value: 'all' },
            { label: 'Show Scheduled', value: 'scheduled' },
            { label: 'Show Unscheduled', value: 'unscheduled' },
        ];
    }

    
    select(event) {
        // Check if there is a Selected Visit, add or remove appropriate class
        if (this.selectedVisit) {
            this.template.querySelector('.selected-visit').classList.remove("selected-visit");
            event.currentTarget.classList.add("selected-visit");
        } else {
            event.currentTarget.classList.add("selected-visit");
        }

        var targetKey = event.currentTarget.getAttribute("id");
        var targetId = event.currentTarget.getAttribute("data-visit-id");

        this.selectedVisit = targetKey;
        this.selectedDetails = this.past[targetId];

        console.log(this.selectedVisit);
        console.log(this.selectedDetails);
        console.log(targetKey);
        console.log(targetId);

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