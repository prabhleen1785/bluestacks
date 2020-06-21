import React from "react";
import Actions from "./Actions";
import price from "./assets/Price.png";
import { withTranslation } from "react-i18next";

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      po: 0
    };
    this.calculateDays = this.calculateDays.bind(this);
  }

  calculateDays(time1, time2) {
    return Math.floor((time1 - time2) / (1000 * 60 * 60 * 24));
  }

  render() {
    const { createdOn, name, region, icon } = this.props.data;
    const { activeTab, handleViewClick, t, handleCalendar, data } = this.props;
    const today = new Date().getTime();
    const dateEvent = new Date(createdOn);
    const daysDif = this.calculateDays(today, createdOn);
    return (
      (((activeTab === "0" || activeTab === 0) && daysDif < 0) ||
        (activeTab === "1" && daysDif === 0) ||
        (activeTab === "2" && daysDif > 0)) && (
        <div className="outerItemWrapper">
          <div className="outerItem">
            <div className="outerItemValue">
              <div className="outerItemDate">
                {new Date(createdOn).toDateString()}
              </div>
              <div className="outerItemDateAgo">
                {daysDif > 0
                  ? `${daysDif} Days Ago`
                  : `${Math.abs(daysDif)} Days Left`}
              </div>
            </div>
            <div className="outerItemValue2">
              <div
                className="outerItemCampaignIcon"
                style={{
                  backgroundImage: `url(${require(`./assets/${icon}.png`)})`
                }}
              />
              <div className="outerItemCampaignOuter">
                <div className="outerItemCampaignName">{name}</div>
                <div className="outerItemCampaignCountry">{region}</div>
              </div>
            </div>
            <div className="outerItemValue2">
              <div className="outerItemViewIcon">
                <img src={price} className="priceIcon" alt="price" />
              </div>
              <div
                className="outerItemViewPricing"
                onClick={() => handleViewClick(this.props.data)}
              >
                {t("View Pricing")}
              </div>
            </div>
            <div className="outerItemValue2">
              <Actions
                dateEvent={dateEvent}
                data={data}
                handleCalendar={handleCalendar}
              />
            </div>
          </div>
        </div>
      )
    );
  }
}
export default withTranslation()(ItemsList);
