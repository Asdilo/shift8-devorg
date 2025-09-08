import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class RecordDisplayComponent extends LightningElement {
    // The @api recordId is automatically populated by Lightning framework
    @api recordId;
    
    // Define fields you want to retrieve (example for Account)
    // You can change these based on your object type
    @wire(getRecord, { 
        recordId: '$recordId', 
        fields: ['Account.Name', 'Account.Phone', 'Account.Industry'] 
    })
    account;

    // Getter to display the record ID
    get currentRecordId() {
        return this.recordId;
    }

    // Getter to check if data is loaded
    get isDataLoaded() {
        return this.account && this.account.data;
    }

    // Getter for account name
    get accountName() {
        return this.account.data ? this.account.data.fields.Name.value : '';
    }

    // Getter for account phone
    get accountPhone() {
        return this.account.data ? this.account.data.fields.Phone.value : '';
    }

    // Getter for account industry
    get accountIndustry() {
        return this.account.data ? this.account.data.fields.Industry.value : '';
    }
}