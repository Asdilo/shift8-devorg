import { LightningElement, api, track } from "lwc";
//import {data} from 'c/pocIqviaSVT';

//Array of name and values for the datatable actions column
const actions = [
  { label: "Verify Item", name: "verifyItem" },
  { label: "New Action Item", name: "newAction" },
  { label: "New Protocol Deviation", name: "newProtocol" },
  { label: "Delete", name: "delete" }
];

//Column config for the data tables within accordions
const columns = [
  {
    type: "text",
    fieldName: "items",
    label: "Verification Item",
  },
  {
    type: "boolean",
    fieldName: "completed",
    label: "Completion Status"
  },
  {
    type: "action",
    typeAttributes: { rowActions: actions }
  }
];

//Big ol minified array of fake data below
const data=[{"subjectId":5182,"status":"Discontinued","label":"5182 Discontinued - N Item(s) Need Verification","visit":[{"date":"11/15/2019","verification":[{"items":"EEG (Electroencephalogram)","completed":false},{"items":"EKG (Electrocardiogram)","completed":true},{"items":"EEG (Electroencephalogram)","completed":true},{"items":"CT(Computed Tomography)","completed":false},{"items":"Laboratory Results","completed":false},{"items":"Vision Test","completed":true},{"items":"CT(Computed Tomography)","completed":true}]},{"date":"03/10/2020","verification":[{"items":"Physical Exam Documentation","completed":true},{"items":"Vitals","completed":false},{"items":"CT(Computed Tomography)","completed":false},{"items":"PFT (Pulmonary Function Test)","completed":true},{"items":"Vision Test","completed":true},{"items":"PFT (Pulmonary Function Test)","completed":false},{"items":"Vision Test","completed":false},{"items":"Laboratory Results","completed":false},{"items":"Laboratory Results","completed":true}]},{"date":"01/07/2020","verification":[{"items":"PFT (Pulmonary Function Test)","completed":true},{"items":"Physical Exam Documentation","completed":true},{"items":"Endoscopy","completed":true},{"items":"Endoscopy","completed":false},{"items":"CT(Computed Tomography)","completed":false},{"items":"CT(Computed Tomography)","completed":true},{"items":"EEG (Electroencephalogram)","completed":false},{"items":"Endoscopy","completed":false}]}]},{"subjectId":4366,"status":"Completed","label":"4366 Completed - N Item(s) Need Verification","visit":[{"date":"04/28/2019","verification":[{"items":"Laboratory Results","completed":false},{"items":"EKG (Electrocardiogram)","completed":true},{"items":"X-Rays","completed":false}]}]},{"subjectId":2523,"status":"Failed","label":"2523 Failed - N Item(s) Need Verification","visit":[{"date":"10/26/2019","verification":[{"items":"PFT (Pulmonary Function Test)","completed":true},{"items":"Laboratory Results","completed":true},{"items":"X-Rays","completed":false}]},{"date":"12/11/2019","verification":[{"items":"EEG (Electroencephalogram)","completed":true},{"items":"Informed Consent","completed":false},{"items":"Vision Test","completed":false},{"items":"Laboratory Results","completed":true}]},{"date":"01/19/2020","verification":[{"items":"Physical Exam Documentation","completed":true},{"items":"CT(Computed Tomography)","completed":false},{"items":"Hearing Test","completed":true},{"items":"Laboratory Results","completed":true},{"items":"PFT (Pulmonary Function Test)","completed":false},{"items":"Endoscopy","completed":true},{"items":"Vision Test","completed":false}]},{"date":"09/25/2019","verification":[{"items":"Vision Test","completed":false}]},{"date":"12/01/2019","verification":[{"items":"Informed Consent","completed":false},{"items":"Physical Exam Documentation","completed":false},{"items":"Hearing Test","completed":true},{"items":"Vitals","completed":true},{"items":"EKG (Electrocardiogram)","completed":false},{"items":"Endoscopy","completed":true}]}]},{"subjectId":8371,"status":"Completed","label":"8371 Completed - N Item(s) Need Verification","visit":[{"date":"04/07/2020","verification":[{"items":"Physical Exam Documentation","completed":false},{"items":"Laboratory Results","completed":false},{"items":"Hearing Test","completed":true},{"items":"Physical Exam Documentation","completed":false},{"items":"X-Rays","completed":true}]},{"date":"08/18/2019","verification":[{"items":"Vitals","completed":false},{"items":"Vitals","completed":false},{"items":"PFT (Pulmonary Function Test)","completed":true}]}]},{"subjectId":4119,"status":"Completed","label":"4119 Completed - N Item(s) Need Verification","visit":[{"date":"07/15/2019","verification":[{"items":"X-Rays","completed":true},{"items":"PFT (Pulmonary Function Test)","completed":true},{"items":"EEG (Electroencephalogram)","completed":false},{"items":"EEG (Electroencephalogram)","completed":true},{"items":"EEG (Electroencephalogram)","completed":true}]},{"date":"06/04/2019","verification":[{"items":"EEG (Electroencephalogram)","completed":false},{"items":"Vision Test","completed":false},{"items":"CT(Computed Tomography)","completed":true},{"items":"Vitals","completed":false},{"items":"PFT (Pulmonary Function Test)","completed":true},{"items":"EEG (Electroencephalogram)","completed":true},{"items":"Hearing Test","completed":false},{"items":"PFT (Pulmonary Function Test)","completed":false},{"items":"Vision Test","completed":false},{"items":"EKG (Electrocardiogram)","completed":false}]},{"date":"08/22/2019","verification":[{"items":"Vision Test","completed":false},{"items":"Hearing Test","completed":false},{"items":"PFT (Pulmonary Function Test)","completed":true},{"items":"X-Rays","completed":false}]},{"date":"07/22/2019","verification":[{"items":"Laboratory Results","completed":true},{"items":"Physical Exam Documentation","completed":false},{"items":"Laboratory Results","completed":true},{"items":"CT(Computed Tomography)","completed":false},{"items":"X-Rays","completed":true}]},{"date":"02/21/2020","verification":[{"items":"PFT (Pulmonary Function Test)","completed":true},{"items":"Physical Exam Documentation","completed":false},{"items":"Laboratory Results","completed":false},{"items":"EKG (Electrocardiogram)","completed":false},{"items":"Informed Consent","completed":false},{"items":"Hearing Test","completed":false},{"items":"Vision Test","completed":true}]}]}];


export default class PocIqviaSVT extends LightningElement {
  //Icon and title can be changed by admin user in app builder
  @api title;
  @api icon = "standard:user";
  @api flexipageRegionWidth; //only here in case we would want to leverage some responsive behaviors on flexipages
  @track recordNum = data.length;
  @track svtColumns = columns;
  @track svtData = data;
  //These arrays simply track which accordions are open. Just in case it is needed
  @track activeSubjects = [];
  @track activeVisits = [];

  @track value;

  //Options for the filter combobox at the top of the component
  get options() {
    return [
        { label: 'All', value: 'new' },
        { label: 'Some', value: 'some' },
        { label: 'None', value: 'none' },
    ];
}
}
