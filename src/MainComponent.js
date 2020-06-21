import React from "react";
import ItemsList from "./ItemsList.js";
import { withTranslation } from "react-i18next";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 0
    };
  }

  render() {
    const { items, activeTab, handleViewClick, t, handleCalendar } = this.props;
    return (
      <div className="outerComp">
        <div className="outerTable">
          <div className="outerHeader">
            <div className="outerValue">{t("DATE")}</div>
            <div className="outerValue">{t("CAMPAIGN")}</div>
            <div className="outerValue">{t("VIEW")}</div>
            <div className="outerValue">{t("ACTIONS")}</div>
          </div>
          {items.map((val, index) => (
            <ItemsList
              data={val}
              key={index}
              activeTab={activeTab}
              handleViewClick={handleViewClick}
              handleCalendar={handleCalendar}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default withTranslation()(MainComponent);
