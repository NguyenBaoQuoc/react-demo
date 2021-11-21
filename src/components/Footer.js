import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../css/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <footer>
          <div className="container">
            <div className="row">
              <div className="footer">
                <ul className="footer__heading">
                  hỗ trợ khách hàng
                  <li>
                    <span style={{ color: "red" }}>Hotline: 1234-5678</span>
                  </li>
                  <li>
                    <a href="">Các câu hỏi thường gặp</a>
                  </li>
                  <li>
                    <a href="">Gửi yêu cầu hỗ trợ</a>
                  </li>
                  <li>
                    <a href="">Báo lỗi bảo mật: security@techonoBIM.com</a>
                  </li>
                </ul>
                <ul className="footer__heading">
                  {" "}
                  về TechnoBIM
                  <li>
                    <a href="">Giới thiệu về TechnoBIM</a>
                  </li>
                  <li>
                    <a href="">Tuyển dụng</a>
                  </li>
                  <li>
                    <a href="">Điều khoản sử dụng</a>
                  </li>
                  <li>
                    <a href="">Thông tin liên hệ</a>
                  </li>
                </ul>

                <ul className="footer__heading footer__transition">
                  {" "}
                  phương thức thanh toán
                  <div className="footer__transition">
                    <li>
                      <img src="img/visa.svg" alt="" />
                    </li>
                    <li>
                      <img src="img/mastercard.svg" alt="" />
                    </li>
                    <li>
                      <img src="img/jcb.svg" alt="" />
                    </li>
                    <li>
                      <img src="img/cash.svg" alt="" />
                    </li>
                    <li>
                      <img src="img/internet-banking.svg" alt="" />
                    </li>
                  </div>
                </ul>
                <div className="footer__contact">
                  <ul className="footer__heading">
                    {" "}
                    kết nối với chúng tôi
                    <div className="footer__social">
                      <li>
                        <a href="">
                          <img src="img/facebook.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="img/zalo.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="img/youtube.png" alt="" />
                        </a>
                      </li>
                    </div>
                  </ul>
                  <ul className="footer__heading">
                    {" "}
                    tải ứng dụng
                    <div className="footer__app">
                      <li>
                        <a href="">
                          <img src="img/appstore.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="img/playstore.png" alt="" />
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__last">
            <div className="container">
              <div className="row">
                <p>
                  © 2021 TechonoBIM. All rights reserved - Developed by Best
                  Solution
                </p>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    );
  }
}

export default Footer;
