import { LightningElement, api, track } from 'lwc';
import CustomIcon from '@salesforce/resourceUrl/CustomIcon';

const results = [
  {
    uniqueId: "A",
    experimentName: "Streamline Checkout Flow",
    variationName: "Remove Edit Function from Checkout",
    variationLink: "https://asteriskloftis.com/",
    dateTime: 1573242019000,
    experimentLink: "https://asteriskloftis.com/"
  },
  {
    uniqueId: "B",
    experimentName: "Checkout CTA Test",
    variationName: "Proceed to Checkout",
    variationLink: "https://asteriskloftis.com/",
    dateTime: 1573242019000,
    experimentLink:"https://asteriskloftis.com/"
  },
  {
    uniqueId: "C",
    experimentName: "Cyber Monday Discounts",
    variationName: "20% off new shoppers",
    variationLink: "https://asteriskloftis.com/",
    dateTime: 1573242019000,
    experimentLink:"https://asteriskloftis.com/"
  },
  {
    uniqueId: "D",
    experimentName: "Navigation Image Test",
    variationName: "One hero image",
    variationLink: "https://asteriskloftis.com/",
    dateTime: 1573094495000,
    experimentLink:"https://asteriskloftis.com/"
  }
];
export default class TileList extends LightningElement {
    @api title;
    @track results = results;
    customIcon = CustomIcon + '#Icon';

}