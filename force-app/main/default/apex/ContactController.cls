public with sharing class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static ContactWrapper getContactDetails(Id contactId) {
        try {
            // Query contact with related account information
            Contact contact = [
                SELECT Id, Name, FirstName, LastName, Email, Phone, MobilePhone, 
                       Title, Department, MailingAddress, LeadSource, CreatedDate,
                       Account.Id, Account.Name, Account.Type, Account.Industry, 
                       Account.Phone, Account.Website, Account.BillingAddress
                FROM Contact 
                WHERE Id = :contactId 
                LIMIT 1
            ];
            
            // Query related cases with summary information
            List<Case> relatedCases = [
                SELECT Id, CaseNumber, Subject, Status, Priority, Type, 
                       CreatedDate, ClosedDate, Origin
                FROM Case 
                WHERE ContactId = :contactId 
                ORDER BY CreatedDate DESC
                LIMIT 10
            ];
            
            // Create case summary statistics
            CaseSummary caseSummary = new CaseSummary();
            caseSummary.totalCases = relatedCases.size();
            caseSummary.openCases = 0;
            caseSummary.closedCases = 0;
            caseSummary.highPriorityCases = 0;
            
            for (Case c : relatedCases) {
                if (c.Status != 'Closed') {
                    caseSummary.openCases++;
                } else {
                    caseSummary.closedCases++;
                }
                
                if (c.Priority == 'High') {
                    caseSummary.highPriorityCases++;
                }
            }
            
            // Prepare wrapper object
            ContactWrapper wrapper = new ContactWrapper();
            wrapper.contact = contact;
            wrapper.recentCases = relatedCases;
            wrapper.caseSummary = caseSummary;
            
            return wrapper;
            
        } catch (Exception e) {
            throw new AuraHandledException('Error retrieving contact details: ' + e.getMessage());
        }
    }
    
    // Wrapper class to return all data in one call
    public class ContactWrapper {
        @AuraEnabled public Contact contact { get; set; }
        @AuraEnabled public List<Case> recentCases { get; set; }
        @AuraEnabled public CaseSummary caseSummary { get; set; }
    }
    
    // Case summary statistics class
    public class CaseSummary {
        @AuraEnabled public Integer totalCases { get; set; }
        @AuraEnabled public Integer openCases { get; set; }
        @AuraEnabled public Integer closedCases { get; set; }
        @AuraEnabled public Integer highPriorityCases { get; set; }
        
        public CaseSummary() {
            this.totalCases = 0;
            this.openCases = 0;
            this.closedCases = 0;
            this.highPriorityCases = 0;
        }
    }
}