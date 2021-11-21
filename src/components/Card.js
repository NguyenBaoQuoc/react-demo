import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div
          class="card-header text-center"
          style={{
            "border-top-left-radius": "25px",
            "border-top-right-radius": "25px",
          }}
        >
          <h3>{this.props.name}</h3>
          <span
            className="badge badge-pill badge-danger"
            style={{ color: "white" }}
          >
            Sale {this.props.sale}%
          </span>
        </div>

        <div class="card-body text-center ">
          <s>${this.props.OldPrice.toLocaleString("us-US")} VNĐ</s>

          <h4 style={{ color: "#FDD017" }}>
            {(
              this.props.OldPrice -
              (this.props.OldPrice * this.props.sale) / 100
            ).toLocaleString("us-US")}
            VNĐ
          </h4>

          <hr></hr>
        </div>

        <div class="card-body text-center ">
          <p>{this.props.content1}</p>

          <p>{this.props.content2}</p>

          <p>{this.props.content3}</p>

          <p>{this.props.content4}</p>

          <p>{this.props.content5}</p>
        </div>

        <div
          class="card-footer text-center"
          style={{
            "border-bottom-left-radius": "25px",
            "border-bottom-right-radius": "25px",
            textAlign: "center",
          }}
        >
          <button
            style={{ "border-radius": "10px" }}
            className="btn btn-primary"
            data-toggle="modal"
            data-target={"#exampleModalCenter_" + this.props.name}
            type="button"
            class="btn btn-info "
          >
            Đăng ký ngay
          </button>
        </div>

        <div
          className="modal fade"
          id={"exampleModalCenter_" + this.props.name}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h4 className="card-title text-center">
                    Bạn muốn đăng ký gói {this.props.name}
                  </h4>

                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        style={{ marginTop: "25px" }}
                        type="text"
                        id="nameUser"
                        className="form-control"
                        placeholder="Họ và tên"
                        required
                        autofocus
                      />

                      <input
                        style={{ marginTop: "25px" }}
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email"
                        required
                      />

                      <input
                        style={{ marginTop: "25px" }}
                        type="tel"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Số điện thoại"
                        required
                      />

                      <input
                        style={{ marginTop: "25px" }}
                        type="tel"
                        id="inputmagiamgia"
                        className="form-control"
                        placeholder="Mã giảm giá"
                        required
                      />

                      <div className="form-group">
                        <textarea
                          className="form-control"
                          style={{ marginTop: "25px" }}
                          id="inputghichu"
                          name="ghichu"
                          placeholder="Ghi chú: (thông tin khác,v.v..)"
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <button
                      style={{ marginTop: "30px" }}
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Gửi
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
