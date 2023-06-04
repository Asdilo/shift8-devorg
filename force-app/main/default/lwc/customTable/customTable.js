import { LightningElement, track } from 'lwc';
//Defin Data table column headers, based on expected data to be returned in the results object below
const columns = [ 
   /*  Due to the LWC strict shadow DOM we cannot add in classes to the cellAttribute. This is because they are 
    'created' before the custom CSS is defined and will only reference base SLDS classes from their parent (the datatable).
    Therefore we are forced to define the styles on the cells themselve...it feels dirty but
    this must be done to leverage the base datatable component and not have to add in static resources and the like.  */
    { label: 'Type', fieldName: 'categoryType', type: 'text', cellAttributes: { style:  'background-color:rgba(79, 38, 131, .2)'}},
    { label: '605 Direct', fieldName: 'direct605', type: 'currency', typeAttributes: { currencyCode: 'USD'}, cellAttributes: { style:  'background-color:rgba(255, 199, 32, .2)'}},
    { label: '605 Evidera Direct', fieldName: 'evideraDirect605', type: 'currency', typeAttributes: { currencyCode: 'USD'}, cellAttributes: { style:  'background-color:rgba(255, 199, 32, .2)'} },
    { label: 'Total 605 Direct', fieldName: 'totalDirect605', type: 'currency', typeAttributes: { currencyCode: 'USD'}, cellAttributes: { style:  'background-color:rgba(255, 199, 32, .2)'} },
    { label: '606 Direct', fieldName: 'direct606', type: 'currency', typeAttributes: { currencyCode: 'USD'}, cellAttributes: { style:  'background-color:rgba(255, 199, 32, .2)'} },
    { label: '606 Evidera Direct', fieldName: 'evideraDirect606', type: 'currency', typeAttributes: { currencyCode: 'USD'}, cellAttributes: { style:  'background-color:rgba(255, 199, 32, .2)'} },
    { label: 'Investigator Grant', fieldName: 'investigatorGrant', type: 'currency', typeAttributes: { currencyCode: 'USD'}, cellAttributes: { style:  'background-color:rgba(128, 161, 182, .2)'} },
    { label: 'Pass Through', fieldName: 'passThrough', type: 'currency', typeAttributes: { currencyCode: 'USD'}, cellAttributes: { style:  'background-color:rgba(128, 161, 182, .2)'} },
    { label: 'Evidera Indirect', fieldName: 'evideraIndirect', type: 'currency', typeAttributes: { currencyCode: 'USD'}, cellAttributes: { style:  'background-color:rgba(128, 161, 182, .2)'} },
    { label: 'Total Indirect', fieldName: 'totalIndirect', type: 'currency', typeAttributes: { currencyCode: 'USD'}, cellAttributes: { style:  'background-color:rgba(128, 161, 182, .2)'}  },
    { label: '606 Grand Total', fieldName: 'grandTotal606', type: 'currency', cellAttributes: { style:  'background-color:rgba(79, 38, 131, .2); font-weight: bold;'}},



];
//The fake data set used to display the data table
const object = {
    results:[   
        {oppInfoBudgetId: 'a0KA0000001IUO9MAO', 
        oppInfoRegionName: 'Asia Pacific',
        contractCurrency:'RUB',
        authResults: [
            {
              categoryType: "Variance",
              direct605: 9900999,
              evideraDirect605: 9900999,
              totalDirect605: 99978799,
              direct606: 56645.55,
              evideraDirect606: 9900999,
              investigatorGrant: 99999,
              passThrough: 9999,
              evideraIndirect: 2222.33,
              totalIndirect: 9995599,
              grandTotal606: 99999
            },
            {
              categoryType: "Budget",
              direct605: 9900999,
              evideraDirect605: 9900999,
              totalDirect605: 99978799,
              direct606: 56645.55,
              evideraDirect606: 9900999,
              investigatorGrant: 99999,
              passThrough: 9999,
              evideraIndirect: 2222.33,
              totalIndirect: 9995599,
              grandTotal606: 99999
            },
            {
              categoryType: "Auths",
              direct605: 9900999,
              evideraDirect605: 9900999,
              totalDirect605: 99978799,
              direct606: 56645.55,
              evideraDirect606: 9900999,
              investigatorGrant: 99999,
              passThrough: 9999,
              evideraIndirect: 2222.33,
              totalIndirect: 9995599,
              grandTotal606: 99999
            },
            {
              categoryType: "SUA Related",
              direct605: 9900999,
              evideraDirect605: 9900999,
              totalDirect605: 99978799,
              direct606: 56645.55,
              evideraDirect606: 9900999,
              investigatorGrant: 99999,
              passThrough: 9999,
              evideraIndirect: 2222.33,
              totalIndirect: 9995599,
              grandTotal606: 99999
            },
          ], 
        historicResults: [],
        missingBudget: false
      },
      {oppInfoBudgetId: 'a0KA0000001IUU9MAO', 
      oppInfoRegionName: 'North America',
      contractCurrency:'USD', 
      authResults: [
          {
            categoryType: "Variance",
            direct605: 9900999,
            evideraDirect605: 9900999,
            totalDirect605: 99978799,
            direct606: 56645.55,
            evideraDirect606: 9900999,
            investigatorGrant: 99999,
            passThrough: 9999,
            evideraIndirect: 2222.33,
            totalIndirect: 9995599,
            grandTotal606: 99999
          },
          {
            categoryType: "Budget",
            direct605: 9900999,
            evideraDirect605: 9900999,
            totalDirect605: 99978799,
            direct606: 56645.55,
            evideraDirect606: 9900999,
            investigatorGrant: 99999,
            passThrough: 9999,
            evideraIndirect: 2222.33,
            totalIndirect: 9995599,
            grandTotal606: 99999
          },
          {
            categoryType: "Auths",
            direct605: 9900999,
            evideraDirect605: 9900999,
            totalDirect605: 99978799,
            direct606: 56645.55,
            evideraDirect606: 9900999,
            investigatorGrant: 99999,
            passThrough: 9999,
            evideraIndirect: 2222.33,
            totalIndirect: 9995599,
            grandTotal606: 99999
          },
          {
            categoryType: "SUA Related",
            direct605: 9900999,
            evideraDirect605: 9900999,
            totalDirect605: 99978799,
            direct606: 56645.55,
            evideraDirect606: 9900999,
            investigatorGrant: 99999,
            passThrough: 9999,
            evideraIndirect: 2222.33,
            totalIndirect: 9995599,
            grandTotal606: 99999
          },
        ], 
      historicResults: [],
      missingBudget: false
    },   
    ],
    hasError:false,
    errorMsg: null,
    superUser: true,
}   

export default class CustomTable extends LightningElement {
    //Track changes to these variables so the UI rerenders automagically
    @track results = object.results;
    @track columns = columns;
  
}