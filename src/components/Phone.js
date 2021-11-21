import { extend } from "lodash";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../css/Phone.css";

class Phone extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <a href="" className="phone__btn">
          <img src="img/phone-call.png" alt="" />
        </a>
      </BrowserRouter>
    );
  }
}

export default Phone;
