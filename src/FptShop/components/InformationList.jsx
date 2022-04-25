import React from "react";
import Information from "./Information";

const InformationList = ({ informationList }) => {
  return (
    <ul className="lg:h-[325px] lg:mt-[100px] flex items-center lg:ml-[301px] flex-wrap lg:w-[1400px] relative ml-[78px] mt-[46px] md:ml-[16px] md:w-[470px]">
      {informationList.map((information) => (
        <li
          key={information.id}
          className="text-[#0168FA] lg:w-[198px] lg:h-[180px] p-8 border border-white bg-white border-r-indigo-100 ml-5 mb-5 relative rounded-xl w-[190px] h-[180px]"
        >
          <Information information={information} />
        </li>
      ))}
    </ul>
  );
};
export default InformationList;
