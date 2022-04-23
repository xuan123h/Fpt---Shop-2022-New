import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div>
      <img
        src="https://timviec365.vn/pictures/images/day-som-de-thanh-cong.jpg"
        alt=""
        className="w-full object-contain mt-[100px]"
      />
      <h1 className="absolute top-[100px] text-white font-bold text-2xl mt-3 ml-[500px]">
        {" "}
        Bạn đã đặt đơn hàng #185473 của của hàng Fpt - Shop thành công.{" "}
      </h1>
      <h2 className="absolute top-[100px] text-orange-200 font-bold text-2xl mt-[60px] ml-[650px] w-[450px]">
        {" "}
        Chúng tôi sẽ bảo quản và giao hàng cho bạn trong thời gian sớm nhất{" "}
      </h2>
      <Link to="/">
        <button className="w-[140px] h-[35px] bg-purple-500 text-white rounded-lg flex items-center justify-center absolute top-[850px] left-[780px]">
          {" "}
          Mua hàng tiếp{" "}
        </button>
      </Link>
    </div>
  );
};

export default Success;
