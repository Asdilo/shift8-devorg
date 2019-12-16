public with sharing class getRecords {
   @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAllOpps() {
        return [SELECT Id, Name ,StageName, CloseDate ,Type ,OwnerId, Amount, Account.Name from Opportunity LIMIT 20] ;
    }
}
