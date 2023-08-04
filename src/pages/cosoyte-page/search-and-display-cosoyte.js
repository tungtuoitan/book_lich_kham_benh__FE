import React from "react";
import "../../styles/search-and-display-cosoyte.scss";

class SearchAndDisplay extends React.Component {
  render() {
    const az = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "#",
    ];
    return (
      <>
        <div className="search-and-display-container">
          <div className="search-group">
            <span className="text-cosoyte">Cơ sở y tế</span>
            <div className="right-group">
              <div className="chon-tinh-thanh">
                <span className="tinh-thanh">Tỉnh thành</span>
                <i class="fa-solid fa-chevron-down chevron-down"></i>
              </div>
              <div className="search-box">
                <input type="text" placeholder="Tìm kiếm"></input>
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="az-container">
          <div className="az">
            {az.map((item, index) => {
              return (
                <div className="letter" key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>

        <div className="result-by-letter-container">
          <div className="result-by-letter">
            <div className="letter-div">
              <div className="letter-square">A</div>
            </div>
            <div className="items">
              <div className="item">
                <img src="https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2020%2F02%2F18%2F170749-benh-vien-an-viet.jpg&w=1920&q=75" />
                <p className="item-title"></p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchAndDisplay;
