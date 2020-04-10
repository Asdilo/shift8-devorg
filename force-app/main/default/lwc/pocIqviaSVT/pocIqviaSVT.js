import {
    LightningElement,
    api,
    track
} from 'lwc';

const columns = [{
        type: 'url',
        fieldName: 'subjectId',
        label: 'Subject ID',
        typeAttributes: {
            label: {
                fieldName: 'subjectId'
            },
        },
        cellAttributes: { style:  'background-color:rgba(128, 161, 182, .2)'},
    },
    {
        type: 'text',
        fieldName: 'status',
        label: 'Status',
    },
    {
        type: 'text',
        fieldName: 'verification',
        label: '',
    },
];

const data = [{
    "subjectId": 5705,
    "status": "Status Uno",
    "verification": "5705 Item(s) need Verification",
    "_children": [
      {
        "subjectId": "04/29/2019",
        "status": null,
        "verification": "Item(s) Verified",
        "_children": [
          {
            "subjectId": "Ferret, black-footed",
            "status": null,
            "verification": "5705 Verification Item"
          }
        ]
      }
    ]
  }, {
    "subjectId": 2035,
    "status": "Status Dos",
    "verification": "2035 Item(s) need Verification",
    "_children": [
      {
        "subjectId": "04/19/2019",
        "status": null,
        "verification": "Item(s) Verified",
        "_children": [
          {
            "subjectId": "Bat, asian false vampire",
            "status": null,
            "verification": "2035 Verification Item"
          },
          {
            "subjectId": "Red howler monkey",
            "status": null,
            "verification": "2035 Verification Item"
          },
          {
            "subjectId": "Langur, hanuman",
            "status": null,
            "verification": "2035 Verification Item"
          }
        ]
      }
    ]
  }, {
    "subjectId": 3815,
    "status": "Status Uno",
    "verification": "3815 Item(s) need Verification",
    "_children": [
      {
        "subjectId": "08/12/2019",
        "status": null,
        "verification": "Item(s) Verified",
        "_children": [
          {
            "subjectId": "Egyptian vulture",
            "status": null,
            "verification": "3815 Verification Item"
          },
          {
            "subjectId": "Tortoise, galapagos",
            "status": null,
            "verification": "3815 Verification Item"
          },
          {
            "subjectId": "Egret, cattle",
            "status": null,
            "verification": "3815 Verification Item"
          }
        ]
      }
    ]
  }, {
    "subjectId": 8287,
    "status": "Status Tres",
    "verification": "8287 Item(s) need Verification",
    "_children": [
      {
        "subjectId": "05/06/2019",
        "status": null,
        "verification": "Item(s) Verified",
        "_children": [
          {
            "subjectId": "Tiger snake",
            "status": null,
            "verification": "8287 Verification Item"
          },
          {
            "subjectId": "Miner's cat",
            "status": null,
            "verification": "8287 Verification Item"
          },
          {
            "subjectId": "Fox, blue",
            "status": null,
            "verification": "8287 Verification Item"
          }
        ]
      }
    ]
  }, {
    "subjectId": 4394,
    "status": "Status Tres",
    "verification": "4394 Item(s) need Verification",
    "_children": [
      {
        "subjectId": "07/16/2019",
        "status": null,
        "verification": "Item(s) Verified",
        "_children": [
          {
            "subjectId": "Bee-eater, white-fronted",
            "status": null,
            "verification": "4394 Verification Item"
          },
          {
            "subjectId": "Violet-crested turaco",
            "status": null,
            "verification": "4394 Verification Item"
          },
          {
            "subjectId": "African elephant",
            "status": null,
            "verification": "4394 Verification Item"
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
}