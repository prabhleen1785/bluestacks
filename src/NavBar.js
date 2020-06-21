import React from "react";

function NavBar(props) {
  const { options, activeMenu, handleClickBar } = props;
  return (
    <div className="navWrapper">
      {options.map((key, index) => {
        return (
          <div
            className={`navBarOptions ${
              JSON.parse(activeMenu) === key.id ? "active" : ""
            }`}
            key={index}
            id={index}
            onClick={e => handleClickBar(e)}
          >
            {key.title}
          </div>
        );
      })}
    </div>
  );
}

export default NavBar;
