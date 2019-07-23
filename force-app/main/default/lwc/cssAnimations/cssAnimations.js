import { LightningElement } from 'lwc';

export default class CssAnimations extends LightningElement {

    toggle() {
        var myEl = this.template.querySelector(".toggler");
        myEl.classList.toggle("slds-is-collapsed");
        this.isSelected = !this.isSelected;
      }
}