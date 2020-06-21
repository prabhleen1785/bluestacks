import React from "react";
import NavBar from "./NavBar";
import MainComponent from "./MainComponent";
import data from "./data.json";
import Popup from "./Popup";
import { withTranslation } from "react-i18next";
import { getData } from "./utils";

class homeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeData: {},
      activeMenu: 0,
      showPopup: false
    };
    this.handleClickBar = this.handleClickBar.bind(this);
    this.handleViewClick = this.handleViewClick.bind(this);
    this.handleCalendar = this.handleCalendar.bind(this);
  }

  handleClickBar(e) {
    this.setState({ activeMenu: e.target.id });
  }

  handleViewClick(data) {
    // function to open modal on view pricing functionality
    this.setState({
      showPopup: !this.state.showPopup,
      activeData: { ...data }
    });
  }

  handleCalendar(obj) {
    // function to handle calendar functionality
    getData({
      host: "http://localhost:8000",
      path: "/register",
      method: "POST",
      body: { ...obj },
      success: data => {
        window.location.reload(true);
        this.setState({ obj: data });
      }
      // failure: (error) => {
      //   alert( "Couldn't register, please try again.", error);
      // },
    });
  }

  render() {
    const { t } = this.props;
    const options = [
      {
        id: 0,
        title: t("Upcoming Campaigns"),
        link: "/option1"
      },
      {
        id: 1,
        title: t("Live Campaigns"),
        link: "/option2"
      },
      {
        id: 2,
        title: t("Past Campaigns"),
        link: "/option3"
      }
    ];
    const items = data;
    return (
      <div className="mainBlock">
        {this.state.showPopup && this.state.activeData ? (
          <Popup
            closePopup={this.handleViewClick}
            data={this.state.activeData}
          />
        ) : null}
        <div className="mainBlockTitle">{t("Manage Campaigns")}</div>
        <NavBar
          options={options}
          activeMenu={this.state.activeMenu}
          handleClickBar={this.handleClickBar}
        />
        <MainComponent
          items={items}
          activeTab={this.state.activeMenu}
          handleViewClick={this.handleViewClick}
          handleCalendar={this.handleCalendar}
        />
      </div>
    );
  }
}
export default withTranslation()(homeComponent);
