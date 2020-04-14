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
    type: "text",
    fieldName: "items",
    label: "Verification Item",
  },
  {
    type: "text",
    fieldName: "completed",
    label: "Completion Status"
  },
  {
    type: "action",
    typeAttributes: { rowActions: actions }
  }
];

const data = [{
  "subjectId": 6341,
  "status": "Discontinued",
  "label": "6341 - Discontinued",
  "visit": [
    {
      "date": "05/11/2019",
      "verification": [
        {
          "items": "Physical Exam Documentation",
          "completed": false
        },
        {
          "items": "Vision Test",
          "completed": true
        },
        {
          "items": "Laboratory Results",
          "completed": true
        },
        {
          "items": "X-Rays",
          "completed": false
        },
        {
          "items": "Laboratory Results",
          "completed": false
        }
      ]
    },
    {
      "date": "07/22/2019",
      "verification": [
        {
          "items": "Laboratory Results",
          "completed": false
        },
        {
          "items": "Informed Consent",
          "completed": false
        }
      ]
    },
    {
      "date": "02/18/2020",
      "verification": [
        {
          "items": "Physical Exam Documentation",
          "completed": true
        },
        {
          "items": "Physical Exam Documentation",
          "completed": true
        },
        {
          "items": "Laboratory Results",
          "completed": true
        },
        {
          "items": "Hearing Test",
          "completed": false
        },
        {
          "items": "EEG (Electroencephalogram)",
          "completed": false
        }
      ]
    },
    {
      "date": "07/11/2019",
      "verification": [
        {
          "items": "Endoscopy",
          "completed": false
        },
        {
          "items": "Vision Test",
          "completed": true
        },
        {
          "items": "EKG (Electrocardiogram)",
          "completed": true
        },
        {
          "items": "Vision Test",
          "completed": false
        }
      ]
    }
  ]
}, {
  "subjectId": 6854,
  "status": "Completed",
  "label": "6854 - Completed",
  "visit": [
    {
      "date": "12/12/2019",
      "verification": [
        {
          "items": "Laboratory Results",
          "completed": true
        },
        {
          "items": "Informed Consent",
          "completed": true
        }
      ]
    },
    {
      "date": "11/30/2019",
      "verification": [
        {
          "items": "X-Rays",
          "completed": false
        },
        {
          "items": "X-Rays",
          "completed": true
        },
        {
          "items": "PFT (Pulmonary Function Test)",
          "completed": true
        },
        {
          "items": "Vision Test",
          "completed": true
        },
        {
          "items": "CT(Computed Tomography)",
          "completed": false
        },
        {
          "items": "PFT (Pulmonary Function Test)",
          "completed": false
        },
        {
          "items": "Physical Exam Documentation",
          "completed": false
        },
        {
          "items": "EEG (Electroencephalogram)",
          "completed": true
        },
        {
          "items": "Vitals",
          "completed": false
        },
        {
          "items": "EEG (Electroencephalogram)",
          "completed": true
        }
      ]
    }
  ]
}, {
  "subjectId": 1664,
  "status": "Screened",
  "label": "1664 - Screened",
  "visit": [
    {
      "date": "05/27/2019",
      "verification": [
        {
          "items": "Vision Test",
          "completed": true
        },
        {
          "items": "PFT (Pulmonary Function Test)",
          "completed": false
        },
        {
          "items": "Informed Consent",
          "completed": false
        },
        {
          "items": "EEG (Electroencephalogram)",
          "completed": false
        },
        {
          "items": "X-Rays",
          "completed": false
        },
        {
          "items": "Endoscopy",
          "completed": false
        },
        {
          "items": "Vitals",
          "completed": false
        },
        {
          "items": "Hearing Test",
          "completed": false
        },
        {
          "items": "EEG (Electroencephalogram)",
          "completed": false
        },
        {
          "items": "Informed Consent",
          "completed": false
        }
      ]
    },
    {
      "date": "03/09/2020",
      "verification": [
        {
          "items": "EEG (Electroencephalogram)",
          "completed": true
        },
        {
          "items": "EEG (Electroencephalogram)",
          "completed": true
        },
        {
          "items": "CT(Computed Tomography)",
          "completed": false
        },
        {
          "items": "Hearing Test",
          "completed": true
        },
        {
          "items": "Endoscopy",
          "completed": true
        },
        {
          "items": "PFT (Pulmonary Function Test)",
          "completed": false
        }
      ]
    }
  ]
}, {
  "subjectId": 2654,
  "status": "Completed",
  "label": "2654 - Completed",
  "visit": [
    {
      "date": "09/01/2019",
      "verification": [
        {
          "items": "X-Rays",
          "completed": true
        },
        {
          "items": "Vitals",
          "completed": false
        },
        {
          "items": "EEG (Electroencephalogram)",
          "completed": true
        }
      ]
    },
    {
      "date": "05/10/2019",
      "verification": [
        {
          "items": "EEG (Electroencephalogram)",
          "completed": true
        },
        {
          "items": "Endoscopy",
          "completed": false
        },
        {
          "items": "Informed Consent",
          "completed": true
        },
        {
          "items": "Physical Exam Documentation",
          "completed": false
        },
        {
          "items": "X-Rays",
          "completed": true
        },
        {
          "items": "Physical Exam Documentation",
          "completed": true
        },
        {
          "items": "Vision Test",
          "completed": true
        },
        {
          "items": "PFT (Pulmonary Function Test)",
          "completed": false
        },
        {
          "items": "X-Rays",
          "completed": true
        }
      ]
    },
    {
      "date": "12/19/2019",
      "verification": [
        {
          "items": "Laboratory Results",
          "completed": false
        },
        {
          "items": "X-Rays",
          "completed": true
        },
        {
          "items": "Vision Test",
          "completed": true
        },
        {
          "items": "Hearing Test",
          "completed": false
        }
      ]
    },
    {
      "date": "09/28/2019",
      "verification": [
        {
          "items": "Vitals",
          "completed": false
        }
      ]
    },
    {
      "date": "02/03/2020",
      "verification": [
        {
          "items": "Endoscopy",
          "completed": true
        }
      ]
    }
  ]
}, {
  "subjectId": 9069,
  "status": "Discontinued",
  "label": "9069 - Discontinued",
  "visit": [
    {
      "date": "05/20/2019",
      "verification": [
        {
          "items": "Informed Consent",
          "completed": false
        },
        {
          "items": "Informed Consent",
          "completed": false
        },
        {
          "items": "EEG (Electroencephalogram)",
          "completed": false
        },
        {
          "items": "EEG (Electroencephalogram)",
          "completed": false
        }
      ]
    },
    {
      "date": "09/15/2019",
      "verification": [
        {
          "items": "Hearing Test",
          "completed": false
        },
        {
          "items": "Endoscopy",
          "completed": false
        },
        {
          "items": "Laboratory Results",
          "completed": false
        },
        {
          "items": "EKG (Electrocardiogram)",
          "completed": true
        },
        {
          "items": "Laboratory Results",
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
  @track recordNum = data.length;
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
