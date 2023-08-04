import react, { Component } from "react";
import "../../styles/slider-2.scss";

class Slider_2 extends Component {
  
  render() {
    const {data} = this.props

    return (
      <div className="slider2-container">
        <div className="vung-bao">
          <div className="header">
            <h2>{data.title}</h2>
            <button>XEM THÊM</button>
          </div>
          <div className="vung-bao-list">
            <div className="arrow-group">
              <div className="left-arrow">
                <i class="fa-solid fa-chevron-right fa-rotate-180 fa-xl arrow-icon"></i>
              </div>
              <div className="right-arrow">
                <i class="fa-solid fa-chevron-right fa-xl arrow-icon"></i>
              </div>
            </div>
            <div className="list-item">
              { data.arr.map((item,index)=>{
                return(
                  <div className="item" key={data.arr[index].id}>
                  <img src={ data.arr[index].srcImg}/>

                  <p>{data.arr[index].title}</p>
                </div>
                  
                )
              })}
             
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider_2;
