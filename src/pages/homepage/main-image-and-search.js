import react, { Component } from "react";

import "../../styles/main-image-and-search.scss";

class MainImageAndSearch extends Component {
  render() {
    return (
      <div className="main-image-group">
        <div className="white-opacity"></div>

        <div className="search-group">
          <h1 className="h1">
            <span className="nen-tang-y-te">NỀN TẢNG Y TẾ</span> <br /> CHĂM SÓC
            SỨC KHỎE TOÀN DIỆN
          </h1>
          <div className="search-box">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input className="o-search" placeholder="Tìm bác sĩ"></input>
          </div>
          <span className="app-and-gg-play-group">
            <img
              className="google-play-icon"
              src="./images/google-play.svg"
            ></img>
            <img className="app-store-icon" src="./images/app-store.svg"></img>
          </span>
        </div>

        <div className="ten-options">
          <ul>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/kham-chuyen-khoa-icon.png"
                ></img>
              </div>
              <span>
                Khám
                <br />
                Chuyên khoa
              </span>
            </li>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/kham-tu-xa-icon.png"
                ></img>
              </div>
              <span>
                Khám
                <br />
                từ xa
              </span>
            </li>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/kham-tong-quan-icon.png"
                ></img>
              </div>
              <span>
                Khám
                <br />
                Tổng quát
              </span>
            </li>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/xet-nghiem-y-hoc-icon.png"
                ></img>
              </div>
              <span>
                Xét nghiệm
                <br />y học
              </span>
            </li>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/suc-khoe-tinh-than-icon.png"
                ></img>
              </div>
              <span>
                Sức khỏe
                <br />
                tinh thần
              </span>
            </li>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/kham-nha-khoa-icon.png"
                ></img>
              </div>
              <span>
                Khám
                <br />
                nha khoa
              </span>
            </li>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/goi-phau-thuat-icon.png"
                ></img>
              </div>
              <span>
                Gói
                <br />
                phẫu thuật
              </span>
            </li>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/san-pham-y-te-icon.png"
                ></img>
              </div>
              <span>
                Sản phẩm
                <br />y tế
              </span>
            </li>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/bai-test-suc-khoe-icon.png"
                ></img>
              </div>
              <span>
                Bài test
                <br />
                sức khỏe
              </span>
            </li>
            <li className="ten-options-li">
              <div className="container-icon-ten">
                <img
                  className="icon-ten-options"
                  src="./images/ten-options/near-home-icon.png"
                ></img>
              </div>
              <span>
                Y tế
                <br /> gần bạn
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainImageAndSearch;
