import React from "react";
import {
  NotificationIcon,
  SearchIcon,
  ShoppingCardIcon,
  UserIcon,
} from "../../SVGIcons";

const Header = ({ cart }) => {
  return (
    <header
      className="min-h-[65px] flex items-center"
      style={{ background: "linear-gradient(90deg, #391C84 0%, #801F8B 100%)" }}
    >
      <nav className="flex justify-between items-center w-full">
        <img
          src="/Logo/logo_avatown_manual_1_basi_inverse.png"
          alt=""
          className="h-[50px]"
        />

        <div className=" w-[calc(100%-256px)]   ml-auto flex  justify-between items-center">
          <a
            href="/"
            className="text-white text-[22px] underline font-medium w-4/12"
          >
            Go to Marketpage
          </a>
          <div className="w-full flex items-center justify-end gap-x-8 h-full">
            <div className="relative w-5/12">
              <input type="text" className="rounded-[5px] py-2 w-full pl-3" />
              <span className="absolute right-2 top-[35%]">
                {" "}
                <SearchIcon />
              </span>
            </div>
            <div className="flex items-center justify-center h-full gap-x-5 mr-5 ">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#34353A] rounded-xl relative">
                {" "}
                <NotificationIcon />
                <span className="w-5 h-5 rounded-[50%] bg-[#DF4949] absolute -top-2 text-white -right-2 flex justify-center items-center">
                  3
                </span>
              </span>
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#34353A] rounded-xl relative">
                {" "}
                <ShoppingCardIcon />
                <span className="w-5 h-5 rounded-[50%] bg-[#DF4949] absolute -top-2 text-white -right-2 flex justify-center items-center">
                  {cart?.length}
                </span>
              </span>
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[white] rounded-xl">
                {" "}
                <UserIcon />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
