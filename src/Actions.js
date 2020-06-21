import React from "react";
import { withTranslation } from "react-i18next";
import statistics from "./assets/statistics-report.png";
import file from "./assets/file.png";
import calendar from "./assets/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date, handleCalendar, data) {
    const newCreatedOn = date.getTime();
    let newData = { ...data };
    newData.createdOn = newCreatedOn;
    handleCalendar(newData);
  }

  render() {
    const { data, handleCalendar, dateEvent, t } = this.props;

    return (
      <div className="actionsWrapper">
        <div className="action1">
          <div className="actionIcon">
            <img src={file} className="fileIcon" alt="CSV" />
          </div>
          <div className="actionName">{t("CSV")}</div>
        </div>
        <div className="action1">
          <div className="actionIcon">
            <img src={statistics} className="fileIcon" alt="CSV" />
          </div>
          <div className="actionName">{t("Report")}</div>
        </div>
        <div className="action1">
          <div className="actionIcon">
            <img src={calendar} className="fileIcon" alt="CSV" />
          </div>

          <div className="actionName">
            {t("Schedule Again")}
            <DatePicker
              selected={dateEvent}
              onChange={date => this.handleChange(date, handleCalendar, data)}
              dateFormat="MMMM d, yyyy"
              popperPlacement="top-start"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation()(Actions);
