import { LightningElement } from 'lwc';
import VERTAFORE_RESOURCES from '@salesforce/resourceUrl/vertaforeResources';


export default class VertaforeAdmin extends LightningElement {

    sirconImgUrl = VERTAFORE_RESOURCES + '/sirconlogo.png';
    vertaforeSvgUrl = VERTAFORE_RESOURCES + '/vertaforelogo.svg';
}