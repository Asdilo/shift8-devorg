import { LightningElement, api, track } from 'lwc';
import Evisort_Resources from '@salesforce/resourceUrl/Evisort';
import { mockData } from "./mockData";

const columns = [
    {
      type: "text",
      fieldName: "label",
      label: "Label",
      sortable: true
    },
    {
        type: "text",
        fieldName: "type",
        label: "Type",
        sortable: true
      },
      {
        type: "boolean",
        fieldName: "active",
        label: "Active",
        sortable: true,
        editable: true
    },
    {
      type: "date",
      fieldName: "created",
      label: "Created Date",
      sortable: true
    }
  ];
export default class EvisortPOC extends LightningElement {
    @api title;
    @track data = mockData;
    @track columns = columns;

     logoPngUrl = Evisort_Resources + '/evisortResources/logo.png';
     logoJpgUrl = Evisort_Resources + '/evisortResources/logo.jpg';
     logoSvgUrl = Evisort_Resources + '/evisortResources/evisortLogo.svg#colorLogo';
     iconSvgUrl = Evisort_Resources + '/evisortResources/evisortIcon.svg#colorIcon';

     isValid = false;

     handleValid() {
         this.isValid = !this.isValid;
     }

     get recordTypes() {
         return [
             { label: 'All', value: 'all' },
             { label: 'Record Type Uno', value: 'uno' },
             { label: 'Record Type Dos', value: 'dos' },
             { label: 'Record Type Tres', value: 'tres' },
         ];
     }

}