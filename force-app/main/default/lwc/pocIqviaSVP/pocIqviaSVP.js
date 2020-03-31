import { LightningElement, api, track } from "lwc";

export default class PocIqviaSVP extends LightningElement {
  @api title;
  @api icon = "standard:opportunity";
  @api classes = "";
  @api flexipageRegionWidth;
  @track typeVal;
  @track milestoneVal;
  @track metricVal = false;
  @track regionVal;
  @track repeatVal;
  @track endVal;

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

  handleChange(event) {
    this.areDetailsVisible = event.target.checked;

    switch (event.target.value) {
      case metric:
        isMetric = true;
        break;
      case metric:
        isMetric = true;
        break;

      default:
        break;
    }
  }
}
