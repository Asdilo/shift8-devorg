import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
    @api title;
    @api source;
    @api text;
    @api icon;
    @api styles;
    @api classes;
}