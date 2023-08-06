import React from "react";
import HometypeBar from "../components/hometype-bar";
import MenuBarSmartf from "../components/menu-bar-smartf";
import TotalPrice from "../components/total-price";
import Item from "../components/item";
import homeList from '../datas/home-list.js'
import hostList from "../datas/host-list.js";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className=" overflow-hidden shadow-header-smartf ">
          <div className=" hidden 7:block ">
            <img
              className=" w-32 text-center   "
              alt=""
              src="./images/logo.svg"
            />
            <div className="inline-flex justify-center items-center h-12 rounded-full border-gray-200 border-1 w-auto shadow-searchbox text-sm font-semibold color222">
              <div className="  ">
                <span className=" w-28 border-r-1 px-4 border-gray-300   ">
                  Anywhere
                </span>
                <span className=" w-28 border-r-1 px-4 border-gray-300   ">
                  Any week
                </span>
                <span className=" w-28 px-4 pl-4 font-light color71 ">
                  Add guests
                </span>
              </div>
              <div className=" bg-red-600 w-8 h-8 rounded-2xl text-white flex justify-center align items-center m-c7   ">
                <i class="fa-solid fa-magnifying-glass fa-xs"></i>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-between items-center  w-calc-48 h-14 mt-c14 rounded-full border-gray-200 border-1  shadow-searchbox-smartf text-sm font-semibold color222">
              <div className=" flex items-center">
                <div className=" w-8 h-8 rounded-2xl flex justify-center align items-center m-c7   ">
                  <i class="fa-solid fa-magnifying-glass fa-md color222"></i>
                </div>
                <div className=" pb-1  ">
                  <div className=" w-28 text-left   ">Anywhere</div>
                  <div className=" text-xs">
                    <span className=" w-28  font-light color71     ">
                      Any week
                    </span>

                    <span className="list-disc w-28  pl-3 font-light color71 ">
                      <span>•</span> Add guests
                    </span>
                  </div>
                </div>
              </div>
              <div className=" w-8 h-8 rounded-2xl  flex justify-center align items-center mr-c12 border-1   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="icon-unknown"
                >
                  <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="pl-6">
            <HometypeBar />
          </div>
        </div>
        <div>
          <TotalPrice />
        </div>
        <div className="flex justify-center ">
          <div className=" w-calc-48 h-calc-vw48 ">
            {homeList.map((item,index)=>{
                let host = hostList.find(x => x.id === item.host)
              return(
                <div key={item.id}>
                  <Item path={item.imgarr[0]} host={host} home={item} />
                </div>  
              )
            })}

          </div>
        </div>

        <div>
          <MenuBarSmartf />
        </div>
      </>
    );
  }
}

export default HomePage;
