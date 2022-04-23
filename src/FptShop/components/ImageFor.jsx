import React from "react";

const ImageFor = () => {
  return (
    <div className="lg:h-[190px] flex items-center lg:ml-[330px] lg:my-[50px] border border-white bg-white lg:w-[1300px] mt-6">
      <img
        src="https://images.fpt.shop/unsafe/fit-in/590x160/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/15/637805049804600792_F-C3_590x160.png"
        alt=""
      />
      <img
        src="https://images.fpt.shop/unsafe/fit-in/590x160/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/29/637790435817411986_F-C3_590x160.png"
        alt=""
        className="lg:ml-[120px] opacity-0 lg:opacity-100"
      />
    </div>
  );
};

export default ImageFor;
