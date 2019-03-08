public with sharing class EmployeeAppController {

    @AuraEnabled(cacheable=true)
    public static List<Employee__c> getEmployees() {
        return [
            SELECT Id, Name, Email__c, Role__c, Phone__c 
            FROM Employee__c
            ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Employee__c> getEmployeesByName(String searchTerm) {
        searchTerm = '%' + searchTerm + '%';
        return [
            SELECT Id, Name, Email__c, Role__c, Phone__c 
            FROM Employee__c
            WHERE Name LIKE :searchTerm
        ];
    }

}
