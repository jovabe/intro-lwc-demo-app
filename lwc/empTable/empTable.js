import { LightningElement, wire, track } from 'lwc';
//import { employeeData, getConsultantsFromEmployees } from './empMockData.js';
//import { employeeData, getConsultantsFromEmployees } from 'c/empMockDataService';
//import getEmployees from '@salesforce/apex/EmployeeAppController.getEmployees';
import getEmployeesByName from '@salesforce/apex/EmployeeAppController.getEmployeesByName';

export default class EmpTable extends LightningElement { 

    @track employees;
    employeeSearchTerm = '';

    @wire(getEmployeesByName, { searchTerm : '$employeeSearchTerm' })
    getEmployees({error, data}) {
        if (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
        else if (data) {
            this.employees = data;
        }
    }

    /*
    connectedCallback() {
        getEmployees().then(result => {
            this.employees = result;
        }, error => {
            // eslint-disable-next-line no-console
            console.log(error);
        })
    }
    */

    handleSearch(event) {
        const targetValue = event.target.value;
        clearTimeout(this.searchTimeout);
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.searchTimeout = setTimeout(() => {
            this.employeeSearchTerm = targetValue;
        }, 500)
    }

    handleEmployeeSelect(event) {
        const targetValue = event.currentTarget.dataset.id;
        const selectedEmployee = this.employees.find(employee => {
            return employee.Id === targetValue;
        })

        this.dispatchEvent(new CustomEvent('employeeselect', {
            detail : selectedEmployee
        }))
    }

}