import { LightningElement, track } from "lwc";

export default class InputListBuilder extends LightningElement {
  @track value = "onceDaily";

  get options() {
    return [
      { label: "As Needed", value: "asNeeded" },
      { label: "Once Daily", value: "onceDaily" },
      { label: "Once Weekly", value: "onceWeekly" }
    ];
  }

  handleChange(event) {
    this.value = event.detail.value;
  }
}