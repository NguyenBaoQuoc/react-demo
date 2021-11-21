import React from "react";

class Payments extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }} className="container py-5">
        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  style={{ color: "#00b33c" }}
                  data-parent="#accordion"
                >
                  {this.props.bankName}
                </a>
              </h4>
            </div>

            <div id="collapse1" className="panel-collapse collapse show in">
              <div className="row py-3">
                <div className="col">
                  <p>
                    <strong> Chủ tài Khoản : </strong>
                    <strong style={{ color: "#0099cc" }}>
                      {this.props.name}{" "}
                    </strong>
                  </p>

                  <p>
                    <strong>{this.props.address}</strong>
                  </p>

                  <p>
                    <strong>Số TK: {this.props.stk}</strong>
                  </p>
                </div>
                <div className="rounded float-right col-3">
                  <img className="img-fluid" src={this.props.src} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payments;
