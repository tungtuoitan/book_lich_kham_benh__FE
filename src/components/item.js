import React from "react";

class Item extends React.Component {
    render() {
      const { home, host, path} = this.props
      return (
        <div className="mb-11">
          <div className=" relative rounded-xl overflow-hidden mb-6  ">
          <img
            src= {path}
            className=" object-cover w-full h-calc-vw48  m-0  "
          />
          {/* 9-ô */}
          <div className=" grid-in-item p-c14 box-border         w-full h-full flex-wrap absolute top-0  ">
            {/* row 1 */}
            <div className="opacity-0">1</div>
            <div className="opacity-0">2</div>
            <div className="flex justify-self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="heart-gray-icon"
              >
                <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
              </svg>
            </div>

            {/* row 2 */}
            <div>4</div>
            <div className="opacity-0">5</div>
            <div>6</div>

            {/* row 3 */}
            {/* book-icon */}
            <div className="flex items-end">
              <div className=" relative ">
                <div className=" w-16         h-c72 bg-gray-EA   rounded-book-icon book-shadow   "></div>
                <div className=" w-16 flex  absolute top-0 left-0 border-r-1 border-solid border-gray-300  border-b-1        h-c72 bg-gray-EA   rounded-book-icon ">
                  <div className="w-c6 h-full border-r-2 border-solid border-gray-300 border-l-1   "></div>
                  <div className="flex items-center justify-center w-full  ">
                    <div className="w-10 h-10   shadow-md first-letter:border-1 border-solid border-gray-400 rounded-full overflow-hidden ">
                      <img src="https://a0.muscache.com/im/pictures/user/08586a25-5872-4b47-97b4-5d74678b9877.jpg?im_w=240" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className=" flex gap-c6   justify-center">
                <div className="w-c6 h-c6 bg-white rounded-full "></div>
                <div className="w-c6 h-c6 bg-gray-unknown rounded-full "></div>
                <div className="w-c6 h-c6 bg-gray-unknown rounded-full "></div>
                <div className="w-c6 h-c6 bg-gray-unknown rounded-full "></div>
                <div className="w-c6 h-c6 bg-gray-unknown rounded-full "></div>
              </div>
            </div>
            <div className="opacity-0">9</div>
          </div>
        </div>
        <div className="grid-in-detail-item text-c15 mt-4 unknown-leading-15 gap-c2 ">
            <div className="manrope-700">{home.city}, {home.country}</div>
            <div className="text-gray7">
              <span>Stay with {host.name}</span><span className="m-c4">.</span>
               <span>{host.more_info.work}</span> <span></span>
            </div>
            <div className="text-gray7">Jul 22 - 27</div> 
            <div className="mt-c6">
              <span className="manrope-700 mr-c4">${home.price} 

              </span>
               <span>night</span>
            </div>
          <div className="text-right flex justify-end manrope-700">
            <span className="mr-c4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="star-letter"
              >
                <path
                  fill-rule="evenodd"
                  d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                ></path>
              </svg>
            </span>
            <span className="font-normal">{host.rating}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;