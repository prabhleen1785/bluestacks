import React from "react";
import { withTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function TopNavBar(props) {
  const { t } = props;
  return (
    <div className="topNavWrapper">
      <div className="titleText">{t("BlueStacks")}</div>
      <LanguageSwitcher />
    </div>
  );
}

export default withTranslation()(TopNavBar);
