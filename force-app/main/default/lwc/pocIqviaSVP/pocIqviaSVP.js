import { LightningElement, api, track } from "lwc";

export default class PocIqviaSVP extends LightningElement {
  @api title;
  @api icon = "standard:opportunity";
  @api classes = "";
  @track typeVal;
  @track milestoneVal;
  @track radioVal;
  @track regionVal;
  @track repeatVal;
  @track endVal;

  get typeOpt() {
    return [
      { label: "First Subject Enrolled At Site", value: "firstSubject" },
      { label: "Site Initiation Visit Date", value: "visitDate" },
      { label: "Other", value: "number" },
    ];
}

get milestoneOpt() {
    return [
      { label: "Metric", value: "none" },
      { label: "Milestone", value: "date" },
      { label: "Other", value: "number" },
    ];
}

  get radioOpt() {
    return [
      { label: "Sun", value: "sunday" },
      { label: "Mon", value: "monday" },
      { label: "Tue", value: "tuesday" },
      { label: "Wed", value: "wednesday" },
      { label: "Thu", value: "thursday" },
      { label: "Fri", value: "friday" },
      { label: "Sat", value: "saturday" }
    ];
  }

  get regionOpt() {
    return [
      { label: "Global", value: "global" },
      { label: "Country Alpha", value: "alpha" },
      { label: "Country Bravo", value: "bravo" },
      { label: "Region Charlie", value: "charlie" },
      { label: "Region Delta", value: "delta" }
    ];
  }

  get intervalOpt() {
    return [
      { label: "Days", value: "days" },
      { label: "Weeks", value: "weeks" },
      { label: "Months", value: "months" },
      { label: "Years", value: "years" }
    ];
  }

  get endOpt() {
    return [
      { label: "None (End of Study)", value: "none" },
      { label: "On Specific Date", value: "date" },
      { label: "After Number of Occurence", value: "number" }
    ];
  }
}
