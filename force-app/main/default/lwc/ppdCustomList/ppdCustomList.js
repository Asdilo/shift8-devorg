import { LightningElement, wire, track } from 'lwc';
import getAllOpps from "@salesforce/apex/getRecords.getAllOpps";
const columns = [
    {
      label: "View",
      type: "button-icon",
      initialWidth: 60,
      typeAttributes: {
        iconName: "action:preview",
        title: "Preview",
        variant: "border-filled",
        alternativeText: "View"
      }
    },
    {
      label: "Opportunity name",
      fieldName: "Name",
      type: "text",
      cellAttributes:{ iconName: "standard:opportunity", iconPosition: "left" },
      sortable: true,
      editable: true
    },
    {
      label: "Stage Name",
      fieldName: "StageName",
      type: "text",
      sortable: true,
      editable: true
    },
    {
      label: "Close date",
      fieldName: "CloseDate",
      type: "date",
      cellAttributes:{ iconName: "standard:date_time", iconPosition: "left" },
      sortable: true,
      editable: true
    }
  ];


export default class PpdCustomList extends LightningElement {

    @track columns = columns;
    @track error;
    @track data;
    @wire(getAllOpps)
    wiredOpps({ error, data }) {
      if (data) {
        this.data = data;
        console.log(data);
        console.log(JSON.stringify(data, null, "\t"));
      } else if (error) {
        this.error = error;
      }
    }
}