import { LightningElement, track, api } from 'lwc';

export default class CssAnimations extends LightningElement {

  renderedCallback() {
    //target your elements with query selection
    var myEls = this.template.querySelectorAll('div.slds-accordion__content');
    var i;

    //loop through node list retunred from querySellectorAll
    for (i = 0; i < myEls.length; i++) {
      myEls[i].classList.add('transition');
      myEls[i].style.backgroundColor = 'red';
    }
    //use this hacky shit to modify base component style
    const style = document.createElement('style');
    style.innerText = `
    .slds-accordion__content {
      -webkit-transition: opacity 1s; /* Safari prior 6.1 */
      transition: opacity 1s;
  };
    `;
    this.template.querySelector('lightning-card').appendChild(style);
  }


  toggle() {
    var myEl = this.template.querySelector('.toggler');
    myEl.classList.toggle('slds-is-collapsed');
    this.isSelected = !this.isSelected;
  }
}