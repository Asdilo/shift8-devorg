import { LightningElement, api, track } from "lwc";

export default class PocIqviaSVP extends LightningElement {
  @api title;
  @api icon = "standard:opportunity";
  @api flexipageRegionWidth;
  @track typeVal;
  @track milestoneVal;
  @track metricVal = false;
  @track regionVal;
  @track repeatVal;
  @track endVal;
  @track isMetric = false;
  @track isMilestone = false;
  @track isDate = false;
  @track isNumber = false;

  //All these getters below are simply to handle UI state and labels/values for inputs
  get milestoneOpt() {
    return [
      { label: "First Subject Enrolled", value: "firstSubject" },
      { label: "Site Initiation Visit Date", value: "visitDate" },
      { label: "Other", value: "number" }
    ];
  }

  get metricOpt() {
    return [
      { label: "Subjects Enrolled", value: "subjectEnrolled" },
      { label: "Subjects Withdrawn", value: "subjectWithdrawn" },
      { label: "Screen Failures", value: "screen" }
    ];
  }

  get typeOpt() {
    return [
      { label: "Metric", value: "metric" },
      { label: "Milestone", value: "milestone" },
      { label: "Other", value: "other" }
    ];
  }

  get kindOpt() {
    return [
      { label: "Remote", value: "remote" },
      { label: "Onsite", value: "onsite" },
      { label: "Other", value: "other" }
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

  //Simple UI logic to handle if certain UI elmements will be shown or be hidden based on boolean values
  handleChange(event) {
    switch (event.target.value) {
      case "metric":
        this.isMetric = true;
        this.isMilestone = false;
        break;

      case "milestone":
        this.isMetric = false;
        this.isMilestone = true;
        break;

      case "date":
        this.isDate = true;
        this.isNumber = false;
        break;

      case "number":
        this.isDate = false;
        this.isNumber = true;
        break;

      case "other":
        this.isMetric = false;
        this.isMilestone = false;
        break;

      case "none":
        this.isDate = false;
        this.isNumber = false;
        break;

      default:
        break;
    }
  }
}
