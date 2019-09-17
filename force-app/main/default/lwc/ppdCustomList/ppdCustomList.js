import { LightningElement, wire, track } from 'lwc';
import getAllOpps from "@salesforce/apex/getRecords.getAllOpps"; //Pull in public Apex class that get records from DB
//Create an array of objects that will shape the columns of the table
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
    // Track the following private property’s values - when these change the component will automagically render again
    @track columns = columns; //assign colomns variable to columns attribute on data table
    @track error;
    @track data;

    //provision data for the table using getAllOpps methods - this is like a reactive web service
    @wire(getAllOpps)
    
    //If the data is there assign it to the data variable if not create an error
    wiredData({ error, data }) {
      if (data) {
        this.data = data;
        //This is for dev purpose just to confirm the data and objects are returning what I want. Remove for prod
        console.log(data);
        console.log(JSON.stringify(data, null, "\t"));
      } else if (error) {
        this.error = error;
      }
    }
}