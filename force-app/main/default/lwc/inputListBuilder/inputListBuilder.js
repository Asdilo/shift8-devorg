import { LightningElement, api } from "lwc";

export default class InputListBuilder extends LightningElement {
  @api title = "Custom Input List Builder";
  @api listType = "Choose";
  @api showEmpty = "false";
}