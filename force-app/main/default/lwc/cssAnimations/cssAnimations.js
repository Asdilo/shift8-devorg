import { LightningElement } from 'lwc';

export default class CssAnimations extends LightningElement {

  renderedCallback() {
    //target your non base lwc HTML elements with query selection
    var myEls = this.template.querySelectorAll('.slds-button');
    var i;

    //loop through node list returned from querySellectorAll
    for (i = 0; i < myEls.length; i++) {
      myEls[i].classList.add('rotate-center');
    }

    //use this hacky shit to modify base component style
    const style = document.createElement('style');
    style.innerText = `
    .slds-accordion__content {
      -webkit-transition: opacity 1s; /* Safari prior 6.1 */
      transition: opacity 1s;
  };
  .slds-button_success:hover {
      -webkit-transition: background-color 2s; /* Safari prior 6.1 */
      transition: background-color 2s;
  };
    `;
    this.template.querySelector('lightning-card').appendChild(style);
  }
}