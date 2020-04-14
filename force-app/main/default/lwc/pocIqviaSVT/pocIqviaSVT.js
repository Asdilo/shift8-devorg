import { LightningElement, api, track } from "lwc";
//import {data} from 'c/pocIqviaSVT';

const actions = [
  { label: "Verify Item", name: "verifyItem" },
  { label: "New Action Item", name: "newAction" },
  { label: "New Protocol Deviation", name: "newProtocol" },
  { label: "Delete", name: "delete" }
];

const columns = [
  {
    type: "number",
    fieldName: "subjectId",
    label: "Subject ID",
  },
  {
    type: "text",
    fieldName: "status",
    label: "Status"
  },
  {
    type: "date",
    fieldName: "visit",
    label: "Visit"
  },
  {
    type: "action",
    typeAttributes: { rowActions: actions }
  }
];

const data = [{
    "subjectId": 6001,
    "status": "Randomized",
    "visit": [
      {
        "Date": "06/17/2019",
        "verification": [
          {
            "items": "Account Representative II",
            "completed": true
          },
          {
            "items": "VP Product Management",
            "completed": false
          },
          {
            "items": "Geologist I",
            "completed": false
          },
          {
            "items": "Office Assistant I",
            "completed": true
          }
        ]
      }
    ]
  }, {
    "subjectId": 1259,
    "status": "Screened",
    "visit": [
      {
        "Date": "01/22/2020",
        "verification": [
          {
            "items": "Quality Engineer",
            "completed": true
          },
          {
            "items": "Web Developer II",
            "completed": true
          },
          {
            "items": "Computer Systems Analyst IV",
            "completed": false
          }
        ]
      },
      {
        "Date": "12/30/2019",
        "verification": [
          {
            "items": "Accounting Assistant II",
            "completed": false
          },
          {
            "items": "Internal Auditor",
            "completed": false
          },
          {
            "items": "Senior Cost Accountant",
            "completed": true
          }
        ]
      }
    ]
  }, {
    "subjectId": 4805,
    "status": "Completed",
    "visit": [
      {
        "Date": "07/28/2019",
        "verification": [
          {
            "items": "Accounting Assistant I",
            "completed": true
          },
          {
            "items": "Graphic Designer",
            "completed": false
          },
          {
            "items": "Project Manager",
            "completed": false
          },
          {
            "items": "Registered Nurse",
            "completed": true
          }
        ]
      },
      {
        "Date": "07/22/2019",
        "verification": [
          {
            "items": "Safety Technician IV",
            "completed": true
          },
          {
            "items": "Accountant I",
            "completed": true
          }
        ]
      }
    ]
  }, {
    "subjectId": 1402,
    "status": "Screened",
    "visit": [
      {
        "Date": "03/04/2020",
        "verification": [
          {
            "items": "Pharmacist",
            "completed": false
          },
          {
            "items": "Financial Analyst",
            "completed": true
          },
          {
            "items": "Product Engineer",
            "completed": true
          },
          {
            "items": "VP Accounting",
            "completed": false
          },
          {
            "items": "Compensation Analyst",
            "completed": false
          }
        ]
      },
      {
        "Date": "06/01/2019",
        "verification": [
          {
            "items": "Help Desk Technician",
            "completed": false
          }
        ]
      }
    ]
  }, {
    "subjectId": 5669,
    "status": "Discontinued",
    "visit": [
      {
        "Date": "03/08/2020",
        "verification": [
          {
            "items": "Administrative Officer",
            "completed": false
          }
        ]
      }
    ]
  }];


export default class PocIqviaSVT extends LightningElement {
  @api title;
  @api icon = "standard:user";
  @api flexipageRegionWidth;
  @track recordNum = 4;
  @track svtColumns = columns;
  @track svtData = data;
  @track activeSubjects = [];
  @track activeVisits = [];

  @track value;

  get options() {
    return [
        { label: 'All', value: 'new' },
        { label: 'Some', value: 'some' },
        { label: 'None', value: 'none' },
    ];
}
}
