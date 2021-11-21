import React from "react";
import "../css/ViewMain.css";
class ViewMain extends React.Component {
  render() {
    return (
      <div>
        <span
          className="mask"
          style={{ backgroundColor: "#2394c8", opacity: "0.6" }}
        />
        <div className="container">
          <div className="row">
            <div className="banner">
              <div className="banner__heading">
                <h1 className="text-white banner__heading-main">
                  Chào mừng bạn đến với TechnoBIM
                </h1>
                <p className="lead mb-4 text-white opacity-8 banner__heading-small">
                  Xây dựng niềm tin , kiến tạo giá trị
                </p>
              </div>
              <img
                src="img/banner2.svg"
                style={{ width: "500px", zindex: "10" }}
              />
            </div>
          </div>
        </div>

        {/* Lượn sóng */}
        <div
          className="position-absolute w-100 z-index-1 bottom-0"
          style={{ marginTop: "400px" }}
        >
          <svg
            className="waves"
            viewBox="0 24 150 40"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="moving-waves">
              <use
                xlinkHref="#gentle-wave"
                x={50}
                y={-3}
                fill="rgba(255,255,255,0.40"
              />
              <use
                xlinkHref="#gentle-wave"
                x={65}
                y={-1}
                fill="rgba(255,255,255,0.35)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={50}
                y={4}
                fill="rgba(255,255,255,0.25)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={55}
                y={8}
                fill="rgba(255,255,255,0.20)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={45}
                y={13}
                fill="rgba(255,255,255,0.15)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={60}
                y={16}
                fill="rgba(255,255,255,1"
              />
            </g>
          </svg>
        </div>

        {/* information card */}
        <section id="count-stats" style={{ marginTop: "400px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-  mt-n10 mx-auto py-2 blur rounded-pill ">
                <div className="row">
                  <div className="col-md-4 position-relative">
                    <div className="p-3 text-center">
                      <h1 className="text-gradient text-primary">
                        <span id="state1" countto={70}>
                          0
                        </span>
                        +
                      </h1>
                      <h5 className="mt-3">Số lượng sản phẩm</h5>
                      <p className="text-sm">
                        From buttons, to inputs, navbars, alerts or cards, you
                        are covered
                      </p>
                    </div>
                    <hr className="vertical dark" />
                  </div>
                  <div className="col-md-4 position-relative">
                    <div className="p-3 text-center">
                      <h1 className="text-gradient text-primary">
                        {" "}
                        <span id="state2" countto={15}>
                          0
                        </span>
                        +
                      </h1>
                      <h5 className="mt-3">Đội ngũ</h5>
                      <p className="text-sm">
                        Mix the sections, change the colors and unleash your
                        creativity
                      </p>
                    </div>
                    <hr className="vertical dark" />
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 text-center">
                      <h1
                        className="text-gradient text-primary"
                        id="state3"
                        countto={4}
                      >
                        0
                      </h1>
                      <h5 className="mt-3">Số năm kinh nghiệm</h5>
                      <p className="text-sm">
                        Save 3-4 weeks of work when you use our pre-made pages
                        for your website
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="point">
          <div className="container">
            <div className="row">
              <div className="point-mar">
                <div className="point__items">
                  <img src="/img/001-rocket.png" alt="" />
                  <div className="point__info">
                    <p className="point__info__title">Công Nghệ Hàng Đầu</p>
                    <p className="point__info__content">
                      Với những sự tài năng và giàu kinh nghiệm, TechnoBIM tự
                      tin là đơn vị đi đầu trong mảng công nghệ BIM hiện tại,
                      với đầy đủ các task phục vụ cho bất kì đơn vị xây dựng nào
                      mong muốn ứng dụng BIM trên cả nước
                    </p>
                  </div>
                </div>
                <div className="point__items">
                  <img src="img/043-directions.png" alt="" />
                  <div className="point__info">
                    <p className="point__info__title">
                      Kinh Nghiệm Tư Vấn Thiết Kế
                    </p>
                    <p className="point__info__content">
                      Với Kinh Nghiệm Tư Vấn Thiết Kế trên 5 năm, TechnoBIM tự
                      tin đưa ra những giải pháp thiết kế Kết Cấu và Kiến Trúc
                      cho hầu hết các dự án đi từ quy mô nhà phố cho đến nhà cao
                      tầng
                    </p>
                  </div>
                </div>
                <div className="point__items">
                  <img src="img/015-success.png" alt="" />
                  <div className="point__info">
                    <p className="point__info__title">
                      Tài Năng Và Nhiệt Huyết
                    </p>
                    <p className="point__info__content">
                      Team của chúng tôi xuất thân từ những kiến trúc sư và kĩ
                      sư có thành tích cao từ ghế nhà trường cho đến cả thời
                      gian công tác tại các đơn vị xây dựng lớn hàng đầu Việt
                      Nam như Hòa Bình và Coteccons
                    </p>
                  </div>
                </div>
                <div className="point__items">
                  <img src="img/010-teamwork.png" alt="" />
                  <div className="point__info">
                    <p className="point__info__title">Thân Thiện - Tận Tâm</p>
                    <p className="point__info__content">
                      Với quan điểm khách hàng là những người bạn, người anh em,
                      TechnoBIM luôn mang trong mình tinh thần hợp tác hữu nghĩ,
                      kết nối, cởi mở kể cả trong trường hợp không đưa ra được
                      giao dịch nào
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <section className="About">
              <div className="About__heading">
                <p>TechnoBIM VIỆT NAM</p>
                <p>
                  Lấy nền tảng công nghệ và sự hài lòng khách hàng là yếu tố
                  trọng tâm cho sự phát triển của TechnoBIM
                </p>
                <button className="btn bg-gradient-info w-auto me-1 mb-0 btn-round col-3  ">
                  Xem Thêm
                </button>
              </div>
              <div id="slideshow">
                <div className="slide-wrapper">
                  <div className="slide">
                    <img src="img/slide1.jpg" />
                  </div>
                  <div className="slide">
                    <img src="img/slide2.jpg" />
                  </div>
                  <div className="slide">
                    <img src="img/slide3.jpg" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* <div className="chat__btn">
          <img src="img/messenger.png" alt="" />
        </div> */}
      </div>
    );
  }
}

export default ViewMain;
