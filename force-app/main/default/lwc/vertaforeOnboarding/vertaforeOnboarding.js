import { LightningElement } from 'lwc';

export default class VertaforeOnboarding extends LightningElement {

    isModalOpen = false;
    activeSections = ['One'];

    //Modal UI show/hide
    modalOpen() {
        this.isModalOpen = true;
    }

    modalClose() {
        this.isModalOpen = false;
    }
}