export const employeeData = [
    {
        Id: '1',
        Name: 'A',
        Email__c: 'a@absi.digital',
        Role__c: 'Developer'
    },
    {
        Id: '2',
        Name: 'B',
        Email__c: 'b@absi.digital',
        Role__c: 'Developer'
    },
    {
        Id: '3',
        Name: 'C',
        Email__c : 'c@absi.digital',
        Role__c : 'Consultant'
    }
];

export const getConsultantsFromEmployees = () => {
    return employeeData.filter(employee => {
        return employee.Role__c === 'Consultant';
    })
}