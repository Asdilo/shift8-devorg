import { LightningElement, api, track } from 'lwc';
import OptimizelyIcon from '@salesforce/resourceUrl/OptimizelyIcon';

const results = [
  {
    uniqueId: "A",
    experimentName: "Streamline Checkout Flow",
    variationName: "Remove Edit Function from Checkout",
    variationLink: "https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Variation__c/a0H3k00000rZ583EAC/view?ws=%2Flightning%2Fr%2FExperiment__c%2Fa033k00000QHiqjAAD%2Fview",
    dateTime: 1573242019000,
    experimentLink: "https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Experiment__c/a033k00000QHiqjAAD/view"
  },
  {
    uniqueId: "B",
    experimentName: "Checkout CTA Test",
    variationName: "Proceed to Checkout",
    variationLink: "https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Variation__c/a0H3k00000rZ586EAC/view?ws=%2Flightning%2Fr%2FExperiment__c%2Fa033k00000QHiqiAAD%2Fview",
    dateTime: 1573242019000,
    experimentLink:"https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Experiment__c/a033k00000QHiqiAAD/view"
  },
  {
    uniqueId: "C",
    experimentName: "Cyber Monday Discounts",
    variationName: "20% off new shoppers",
    variationLink: "https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Variation__c/a0H3k00000rZ57rEAC/view?ws=%2Flightning%2Fr%2FExperiment__c%2Fa033k00000QHiqnAAD%2Fview",
    dateTime: 1573242019000,
    experimentLink:"https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Experiment__c/a033k00000QHiqnAAD/view"
  },
  {
    uniqueId: "D",
    experimentName: "Navigation Image Test",
    variationName: "One hero image",
    variationLink: "https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Variation__c/a0H3k00000rZ57XEAS/view?ws=%2Flightning%2Fr%2FExperiment__c%2Fa033k00000QHiqsAAD%2Fview",
    dateTime: 1573094495000,
    experimentLink:"https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Experiment__c/a033k00000QHiqsAAD/view"
  }
];
export default class TileList extends LightningElement {
    @api title;
    @track results = results;
    optIcon = OptimizelyIcon + '#optimizelyIcon';

}