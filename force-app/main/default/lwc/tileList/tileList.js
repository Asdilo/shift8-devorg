import { LightningElement, api, track } from 'lwc';
import OptimizelyIcon from '@salesforce/resourceUrl/OptimizelyIcon';

const results = [
  {
    uniqueId: "A",
    experimentName: "Streamline Checkout Flow",
    variationName: "Variation URL Link Here",
    variationLink: "https://www.optimizely.com/",
    dateTime: 1547250828000,
    experimentLink: "https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Experiment__c/a033k00000QHiqjAAD/view?ws=%2Flightning%2Fr%2FProject__c%2Fa083k00001fMbx8AAC%2Fview"
  },
  {
    uniqueId: "B",
    experimentName: "Checkout CTA Test",
    variationName: "Variation URL Link Here",
    variationLink: "https://www.optimizely.com/",
    dateTime: 1547250828000,
    experimentLink:"https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Experiment__c/a033k00000QHiqiAAD/view?ws=%2Flightning%2Fr%2FProject__c%2Fa083k00001fMbx8AAC%2Fview"
  },
  {
    uniqueId: "C",
    experimentName: "Cyber Monday Discounts",
    variationName: "Variation URL Link Here",
    variationLink: "https://www.optimizely.com/",
    dateTime: 1547250828000,
    experimentLink:"https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Experiment__c/a033k00000QHiqnAAD/view?ws=%2Flightning%2Fr%2FProject__c%2Fa083k00001fMbx8AAC%2Fview"
  },
  {
    uniqueId: "D",
    experimentName: "Navigation Image Test",
    variationName: "Variation URL Link Here",
    variationLink: "https://www.optimizely.com/",
    dateTime: 1547250828000,
    experimentLink:"https://optimizely-df19demo-dev-ed.lightning.force.com/lightning/r/Experiment__c/a033k00000QHiqsAAD/view?ws=%2Flightning%2Fr%2FProject__c%2Fa083k00001fMbx8AAC%2Fview"
  }
];
export default class TileList extends LightningElement {
    @api title;
    @track results = results;
    optIcon = OptimizelyIcon + '#optimizelyIcon';

}