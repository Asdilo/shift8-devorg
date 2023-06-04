import { LightningElement, api, track } from 'lwc';
import { profileData } from "./data";

export default class CardProfileList extends LightningElement {
    @api title;
    @api text;
    @api classes;
    @api styles;
    @track profiles = profileData;
}