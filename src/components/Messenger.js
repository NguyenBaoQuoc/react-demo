import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../css/Messenger.css";
class Messenger extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="chat__btn">
          <img src="img/messenger.png" alt="" />
        </div>
      </BrowserRouter>
    );
  }
}

export default Messenger;
