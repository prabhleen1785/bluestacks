import React from "react";
import { withTranslation } from "react-i18next";

class Popup extends React.Component {
  render() {
    const { name, region, price1, price2, price3, icon } = this.props.data;
    const { t } = this.props;

    return (
      <div className="popup">
        <div className="popupinner">
          <div className="popupupper">
            <div
              className="popupicon"
              style={{
                backgroundImage: `url(${require(`./assets/${icon}.png`)})`
              }}
            />
            <div className="popupheadingcontainer">
              <div className="popupheading">{name}</div>
              <div className="popupcountry">{region}</div>
            </div>
          </div>
          <div className="popuppricingtext">{t("Pricing")}</div>
          <div className="popuppricing">
            <div className="popuppricingrow">
              <div className="popuppricingfirst">{t("1 Week - 1 Month")}</div>
              <div className="popuppricingvalue">$ {price1}</div>
            </div>
            <div className="popuppricingrow">
              <div className="popuppricingfirst">{t("6 Month")}</div>
              <div className="popuppricingvalue">$ {price2}</div>
            </div>
            <div className="popuppricingrow">
              <div className="popuppricingfirst">{t("1 Month")}</div>
              <div className="popuppricingvalue">$ {price3}</div>
            </div>
          </div>
          <div className="popupbutton">
            <div onClick={this.props.closePopup} className="popupclosebutton">
              {t("Close")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Popup);
