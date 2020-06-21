import React from "react";
import { withTranslation, Trans } from "react-i18next";

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "en",
      display: false
    };
  }

  onLanguageHandle = event => {
    let newLang = event.target.value;
    this.setState({ value: newLang });
    this.props.i18n.changeLanguage(newLang);
  };

  togglePopup = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    const { t } = this.props;

    return (
      <div className="outerWrapper">
        <div className="languageSwitcher" onClick={this.togglePopup}>
          {t("Change Your Language")}
        </div>
        {this.state.display && (
          <div className="languagePopup">
            <div className="languageNameWrapper">
              <input
                checked={this.state.value === "en"}
                name="language"
                onChange={e => this.onLanguageHandle(e)}
                value="en"
                type="radio"
              />
              <div className="languageName">{t("English")}</div>
            </div>
            <div className="languageNameWrapper">
              <input
                name="language"
                value="jp"
                checked={this.state.value === "jp"}
                type="radio"
                onChange={e => this.onLanguageHandle(e)}
              />
              <div className="languageName">{t("Japanese")}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withTranslation()(LanguageSwitcher);
