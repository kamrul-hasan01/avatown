import React from "react";
import {
  NotificationIcon,
  SearchIcon,
  ShoppingCardIcon,
  UserIcon,
} from "../../SVGIcons";

const Header = ({ cart }) => {
  console.log("cart :", cart);
  const total = cart?.reduce((pre, next) => pre + next.price * next.qty, 0);
  return (
    <header
      className="min-h-[65px] flex items-center relative z-[100]"
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
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#34353A] rounded-xl relative group">
                {" "}
                <ShoppingCardIcon />
                <span className="w-5 h-5 rounded-[50%] bg-[#DF4949] absolute -top-2 text-white -right-2 flex justify-center items-center">
                  {cart?.length}
                </span>
                <div className="absolute bg-white min-w-[250px] rounded-lg top-10 -right-12 hidden group-hover:block">
                  <ul className="max-h-[400px] overflow-y-auto">
                    {cart.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center p-2"
                      >
                        <div className="w-[50px] h-[50px]">
                          <img
                            src={"/Avatar/" + item?.img_url}
                            alt=""
                            className="w-[60px] h-[60px] object-cover rounded-[5px]"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                          <h1 className="text-[#34353A] text-[14px] font-medium">
                            {item?.title.slice(0, 10)}...
                          </h1>
                          <span className="text-[#34353A] text-[12px] font-medium">
                            ${item?.price}
                          </span>
                        </div>
                        <div className="w-[20px] h-[20px] flex justify-center items-center bg-[#DF4949] rounded-[50%]">
                          <span className="text-white text-[12px] font-medium">
                            x{item?.qty}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button className="text-center bg-[green] w-10/12 block mx-auto text-white py-3 rounded my-2">
                    Checkout{" "}
                    <span className="font-extrabold pl-3">(${total})</span>
                  </button>
                </div>
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
