import { LightningElement, track } from "lwc";

export default class ListMedications extends LightningElement {
  @track value = [
      { label: "As Needed", value: "asNeeded" },
      { label: "Once Daily", value: "onceDaily" },
      { label: "Once Weekly", value: "onceWeekly" }
    ];


  get unitOptions() {
    return [
      { label: "mg", value: "mg" },
      { label: "ml", value: "ml" },
      { label: "oz", value: "oz" }
    ];
  }

  handleChange(event) {
    this.value = event.detail.value;
  }
}