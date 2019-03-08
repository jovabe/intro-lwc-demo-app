import { LightningElement } from 'lwc';

export default class EmpApp extends LightningElement {

    handleEmployeeSelection(event) {
        const selectedEmployee = event.detail;
        this.template.querySelector('c-emp-tile').employee = selectedEmployee;
    }

}