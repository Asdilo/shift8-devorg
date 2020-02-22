import { LightningElement, api } from 'lwc';

export default class RecordForm extends LightningElement {

    @api recordId;
    @api objectApiName;
    @api fields = ["Type", "StageName", "Amount"];
    @api columns = 3;
}