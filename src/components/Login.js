import React from "react";
import "../css/Login.css";
import { Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div
        style={{ marginTop: "100px" }}
        className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"
      >
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row px-5 justify-content-center">
                  <img
                    style={{ width: "80%", height: "80%", marginTop: "80px" }}
                    src="https://i.imgur.com/uNGdWHi.png"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 style={{ marginTop: "10px" }} className="text-center">
                Chào mừng bạn đã quay trở lại với TechnoBIM
              </h4>

              <div className="card2 card border-0 px-4 py-5">
                <div className="row mb-4 px-3">
                  <h6 className="mb-0 mr-4 mt-2">Đăng nhập với</h6>

                  <div className="facebook text-center mr-3">
                    <div className="fa fa-facebook" />
                  </div>

                  <div className="twitter text-center mr-3">
                    <div className="fa fa-twitter" />
                  </div>
                  <div className="linkedin text-center mr-3">
                    <div className="fa fa-linkedin" />
                  </div>
                </div>

                <div className="row px-3 mb-4">
                  <div className="line" />{" "}
                  <small className="or text-center">Hoặc</small>
                  <div className="line" />
                </div>

                <div className="row px-3">
                  {" "}
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Địa chỉ email</h6>
                  </label>{" "}
                  <input
                    className="mb-4"
                    type="text"
                    name="email"
                    placeholder="Nhập địa chỉ email"
                  />{" "}
                </div>
                <div style={{ marginBottom: "10px" }} className="row px-3">
                  {" "}
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Mật khẩu</h6>
                  </label>{" "}
                  <input
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu"
                  />
                </div>

                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      className="custom-control-input"
                    />
                    <label
                      htmlFor="chk1"
                      className="custom-control-label text-sm"
                    >
                      Nhớ mật khẩu
                    </label>
                  </div>
                  <a href="#" className="ml-auto mb-0 text-sm">
                    Quên mật khẩu?
                  </a>
                </div>

                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    <Link className="text-danger " to="/register">
                      {" "}
                      Bạn chưa có tài khoản đăng ký ngay ?{" "}
                    </Link>
                  </small>
                </div>

                <div
                  style={{ textDecoration: "none" }}
                  className="row mb-3 px-3"
                >
                  <button type="submit" className="btn btn-info">
                    Đăng nhập
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
