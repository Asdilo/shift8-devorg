import { LightningElement, api, wire, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import getContactDetails from '@salesforce/apex/ContactController.getContactDetails';

export default class ContactDetailsComponent extends NavigationMixin(LightningElement) {
    @api recordId; // Contact Id passed from record page
    @track contactData;
    @track error;
    @track isLoading = true;

    // Wire the Apex method to get contact details
    @wire(getContactDetails, { contactId: '$recordId' })
    wiredContactDetails({ error, data }) {
        this.isLoading = true;
        if (data) {
            this.contactData = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contactData = undefined;
            this.showToast('Error', 'Error loading contact details: ' + error.body.message, 'error');
        }
        this.isLoading = false;
    }

    // Getters for template data
    get contact() {
        return this.contactData ? this.contactData.contact : null;
    }

    get account() {
        return this.contact && this.contact.Account ? this.contact.Account : null;
    }

    get recentCases() {
        return this.contactData ? this.contactData.recentCases : [];
    }

    get caseSummary() {
        return this.contactData ? this.contactData.caseSummary : null;
    }

    get hasAccount() {
        return this.account != null;
    }

    get hasCases() {
        return this.recentCases && this.recentCases.length > 0;
    }

    get mailingAddress() {
        if (this.contact && this.contact.MailingAddress) {
            const addr = this.contact.MailingAddress;
            return `${addr.street || ''} ${addr.city || ''} ${addr.state || ''} ${addr.postalCode || ''}`.trim();
        }
        return 'No address available';
    }

    get accountBillingAddress() {
        if (this.account && this.account.BillingAddress) {
            const addr = this.account.BillingAddress;
            return `${addr.street || ''} ${addr.city || ''} ${addr.state || ''} ${addr.postalCode || ''}`.trim();
        }
        return 'No address available';
    }

    get formattedCreatedDate() {
        return this.contact ? new Date(this.contact.CreatedDate).toLocaleDateString() : '';
    }

    // Navigation methods
    navigateToAccount() {
        if (this.account) {
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.account.Id,
                    actionName: 'view'
                }
            });
        }
    }

    navigateToCase(event) {
        const caseId = event.target.dataset.caseId;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: caseId,
                actionName: 'view'
            }
        });
    }

    // Format case created date
    formatCaseDate(dateString) {
        return new Date(dateString).toLocaleDateString();
    }

    // Get priority badge variant
    getPriorityVariant(priority) {
        switch (priority) {
            case 'High':
                return 'error';
            case 'Medium':
                return 'warning';
            case 'Low':
                return 'success';
            default:
                return 'base';
        }
    }

    // Get status badge variant
    getStatusVariant(status) {
        switch (status) {
            case 'Closed':
                return 'success';
            case 'Working':
                return 'warning';
            case 'New':
                return 'brand';
            default:
                return 'base';
        }
    }

    // Utility method to show toast messages
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }

    // Handle refresh
    handleRefresh() {
        this.isLoading = true;
        return refreshApex(this.wiredContactDetails);
    }
}