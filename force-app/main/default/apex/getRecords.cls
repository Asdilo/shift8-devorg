public with sharing class getRecords {
   @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAllOpps() {
        return [SELECT Id, Name ,StageName, CloseDate ,Type ,Probability,Account.Name from Opportunity LIMIT 10] ;
    }
}
