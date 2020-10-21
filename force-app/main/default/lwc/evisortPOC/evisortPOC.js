import { LightningElement, api } from 'lwc';
import Evisort_Resources from '@salesforce/resourceUrl/Evisort';

export default class EvisortPOC extends LightningElement {
    @api title;

     logoPngUrl = Evisort_Resources + '/evisortResources/logo.png';
     logoJpgUrl = Evisort_Resources + '/evisortResources/logo.jpg';
     logoSvgUrl = Evisort_Resources + '/evisortResources/evisortLogo.svg#colorLogo';
     iconSvgUrl = Evisort_Resources + '/evisortResources/evisortIcon.svg#colorIcon';

     isValid = false;

     handleValid() {
         this.isValid = !this.isValid;
     }

}