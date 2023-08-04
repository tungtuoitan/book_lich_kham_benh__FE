import react, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/header.scss";

class Header extends Component {
  render() {
    return ( 
      <div className="header">
        <div className="header-container">
          <div className="logo-group">
            <div className="menu-icon">
                <div className="duong-ke-ngang"></div >
                <div className="duong-ke-ngang"></div >
                <div className="duong-ke-ngang"></div >
            </div>
            <img className="logo" src="./images/logo.svg" />
          </div>
          <div className="mid-group">
            <div className="md">
              <div className="md1">Chuyên khoa</div>
              <div className="md2">Tìm theo bác sĩ chuyên khoa</div>
            </div>
            <div className="md">
              <div className="md1">Cơ sở y tế</div>
              <div className="md2">Chọn bệnh viện phòng khám</div>
            </div>
            <div className="md">
              <div className="md1">Bác sĩ</div>
              <div className="md2">Chọn bác sĩ giỏi</div>
            </div>
            <div className="md">
              <div className="md1">Gói khám</div>
              <div className="md2">Khám sức khỏe tổng quát</div>
            </div>
          </div>
          <div className="hotro-group">
            <div>
              <i class="fa-solid fa-circle-question question-icon"></i>
              <span>Hỗ trợ</span>
            </div>
            <div className="phone-number">024-7301-2468</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
