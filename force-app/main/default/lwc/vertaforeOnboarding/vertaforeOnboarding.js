import { LightningElement, api } from 'lwc';
import VERTAFORE_RESOURCES from '@salesforce/resourceUrl/vertaforeResources';


export default class VertaforeOnboarding extends LightningElement {

    @api linkText;
    @api linkUrl;
    isModalOpen = false;
    comboValue = 'type1';
    activeSections = ['One'];
    sirconImgUrl = VERTAFORE_RESOURCES + '/sirconlogo.png';
    vertaforeSvgUrl = VERTAFORE_RESOURCES + '/vertaforelogo.svg';


    //Modal UI show/hide
    modalOpen() {
        this.isModalOpen = true;
    }

    modalClose() {
        this.isModalOpen = false;
    }

    //Combobox handler
    handleComboChange(event) {
        this.comboValue = event.detail.value;
    }

    //Getter For UI
    get options() {
        return [
            { label: 'Type One', value: 'type1' },
            { label: 'Type Two', value: 'type2' },
            { label: 'Type Three', value: 'type3' },
        ];
    }
}