export const employeeData = [
    {
        Id: '1',
        Name: 'Bart',
        Email__c: 'bart@absi.digital',
        Role__c: 'Developer'
    },
    {
        Id: '2',
        Name: 'Alin',
        Email__c: 'alin@absi.digital',
        Role__c: 'Developer'
    },
    {
        Id: '3',
        Name: 'Benny',
        Email__c : 'benny@absi.digital',
        Role__c : 'Consultant'
    }
];

export const getConsultantsFromEmployees = () => {
    return employeeData.filter(employee => {
        return employee.Role__c === 'Consultant';
    })
}