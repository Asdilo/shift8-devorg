import { LightningElement, api, track } from 'lwc';
import {pocData} from './mockData'

export default class PocPEvisits extends LightningElement {

    @api icon;
    @api title;
    @api cta;
    @api btntxt;
    @track data = pocData;

}