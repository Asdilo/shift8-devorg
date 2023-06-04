import { LightningElement, api, track } from "lwc";

export default class RecordForm extends LightningElement {
  @api recordId;
  @api objectApiName;
  @api fields; //User enter fields via App Builder
  @api columns; //User enter number of comumns via App Builder
  @track fieldList;

  //The connectedCallback runs autonatically when lwc is inserted into the DOM
  connectedCallback() {
    var userFields = this.fields;
    //The following statement takes the user entered fields splits them into an array
    //Then takes each array item and maps it back to an array trimmed using a arrowed function for the ES6 swagger
    //Finally, assign those values to thefieldList tracked variable 
    this.fieldList = userFields.split(",").map(item => item.trim()); 
  }
}
