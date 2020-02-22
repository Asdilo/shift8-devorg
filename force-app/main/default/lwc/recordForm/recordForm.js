import { LightningElement, api, track } from "lwc";

export default class RecordForm extends LightningElement {
  @api recordId;
  @api objectApiName;
  @api fields;
  @api columns;
  @track fieldList;
  connectedCallback() {
    var userFields = this.fields;
    this.fieldList = userFields.split(",");
  }
}
