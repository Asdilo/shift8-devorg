import { LightningElement, track, api } from 'lwc';

export default class CssAnimations extends LightningElement {

  renderedCallback() {
//target your elements with query selection
    var myEls = this.template.querySelectorAll(".slds-accordion__content");
    var i;

    if (this.hasRendered) return;
    this.hasRendered = true;

    //loop through node list retunred from querySellectorAll
    for (i = 0; i < myEls.length; i++) {
      myEls[i].classList.add("poop");
      myEls[i].style.backgroundColor = "red";
    }
//use this for standard components
    const style = document.createElement('style');
    style.innerText = `
    .slds-is-open>.slds-accordion__content {
      -webkit-transition: height 2s, opacity 2s; /* Safari prior 6.1 */
      transition: height 2s, opacity 2s;
  }
    `;
    this.template.querySelector('lightning-card').appendChild(style);
  }
  

  toggle() {
    var myEl = this.template.querySelector(".toggler");
    myEl.classList.toggle("slds-is-collapsed");
    this.isSelected = !this.isSelected;
  }
  }