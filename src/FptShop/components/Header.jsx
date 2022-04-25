import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaBook,
  FaLightbulb,
  FaFaucet,
  FaShoppingCart,
  // FaUser,
  FaRegistered,
  FaEye,
  FaFacebook,
  FaGoogle,
  FaBars,
} from "react-icons/fa";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

// Firebase
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    // width: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// firebase
import { useAuth } from "../contexts/auth-context";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "primary",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Header = () => {
  // firebase
  const { userInfo } = useAuth();
  // use react-hook-form
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // cart
  const state = useSelector((state) => state.handleCart);

  // search
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/product"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setProduct(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);
  const [searchProduct, setSearchProduct] = useState("");

  // Menu bars
  const [show, setShow] = useState(false);
  const handleShowMenu = () => {
    setShow((show) => !show);
  };

  // đăng xuất - signout
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <div>
        <div>
          <div className="relative lg:h-[56px] text-[#212529] bg-[#CD1818]  w-[375px] h-[40px] md:w-[470px] lg:p-2 lg:w-[1904px]">
            <div className="lg:max-w-[151px] lg:max-h-[40px] lg:ml-[310px] max-w-[100px] absolute left-[05px] top-[08px] md:left-[10px]">
              <Link to="/">
                <img
                  src="http://fptshop.com.vn/Content/RecurringV3/images/logo-mb.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <div className="absolute lg:top-2 lg:left-[400px] bg-[#FFFFFF] flex items-center justify-between lg:h-[38px] h-[20px] top-[10px] ml-[120px] md:ml-[130px]">
              <input
                type="text"
                placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm "
                className="lg:pl-4 lg:w-[540px] lg:h-[38px] border-none rounded-sm outline-none font-bold w-[150px] h-[20px] text-[10px] pl-1 lg:text-lg md:w-[230px]"
              />
              <li className="list-none lg:translate-x-6 lg:w-[58px] lg:h-[38px] border lg:border-black lg:bg-black text-white flex items-center justify-center cursor-pointer w-[30px] border-orange-500 bg-orange-500 h-[20px] translate-x-2">
                {" "}
                <FaSearch />{" "}
              </li>
            </div>
            <li
              className="lg:opacity-0 opacity-100 list-none absolute top-3 left-[340px] text-white md:left-[430px]"
              onClick={handleShowMenu}
            >
              <FaBars />
            </li>
            <div
              className={`absolute lg:top-2 lg:left-[1230px] list-none text-white lg:opacity-100 ${
                show ? "opacity-100" : "opacity-0"
              }`}
            >
              <li className="lg:w-6 lg:h-6 lg:ml-7">
                {" "}
                <FaBook />{" "}
              </li>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <div className="list-none text-center lg:text-[16px] lg:w-[250px] bg-white">
                      <li> Tin mới</li>
                      <li> Khuyến mãi </li>
                      <li> Thủ thuật </li>
                      <li> For Gamers </li>
                      <li> Video hot </li>
                      <li> Đánh giá - tư vấn </li>
                      <li> App & Game </li>
                      <li> Sự kiện </li>
                    </div>
                  </React.Fragment>
                }
              >
                <li className="cursor-pointer">
                  <Typography fonnSize="8" color="inherit">
                    Thông tin hay
                  </Typography>
                </li>
              </HtmlTooltip>
            </div>
            <div
              className={`absolute lg:top-2 lg:left-[1350px] list-none  lg:opacity-100 ${
                show ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center">
                <li className="lg:w-6 lg:h-6 border border-white bg-white flex items-center justify-center border-r-indigo-400 lg:ml-8">
                  {" "}
                  <FaLightbulb />{" "}
                </li>
                <li className="lg:w-6 lg:h-6 border border-white bg-white flex items-center justify-center">
                  {" "}
                  <FaFaucet />{" "}
                </li>
              </div>
              <div className="">
                <li className="lg:text-sm lg:w-[132px] text-white lg:mt-[1px] cursor-pointer">
                  {" "}
                  Thu hộ điện , nước{" "}
                </li>
              </div>
            </div>
            <div
              className={`absolute lg:top-2 lg:left-[1499px] lg:list-none text-white lg:ml-[15px]  lg:opacity-100 ${
                show ? "opacity-100" : "opacity-0"
              }`}
            >
              <li className="w-6 h-6 ml-4">
                <FaShoppingCart />{" "}
              </li>
              <li className="lg:text-sm lg:mt-[1px]">
                {" "}
                <Link to="/cart"> Giỏ hàng : </Link>
                {state.length}
              </li>
            </div>
            <div
              className={`absolute lg:top-1 lg:left-[1499px] list-none text-white lg:ml-[110px] lg:opacity-100 ${
                show ? "opacity-100" : "opacity-0"
              }`}
            >
              <li className="lg:w-6 lg:h-6 lg:ml-12 absolute lg:mt-[4px]">
                {" "}
                <FaRegistered />{" "}
              </li>
              {!userInfo ? (
                <Link to="/sign-in">
                  {" "}
                  <button className="text-white lg:mt-[29px] lg:text-sm lg:ml-6">
                    {" "}
                    Đăng nhập{" "}
                  </button>{" "}
                </Link>
              ) : (
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <div className="list-none text-center lg:text-[16px] lg:w-[150px] bg-white">
                        <li className="cursor-pointer"> Tài Khoản Của Tôi </li>
                        <li className="cursor-pointer"> Đơn Mua </li>
                        <li onClick={handleSignOut} className="cursor-pointer">
                          {" "}
                          Đăng Xuất{" "}
                        </li>
                      </div>
                    </React.Fragment>
                  }
                >
                  <div className="lg:mt-7 lg:ml-1 cursor-pointer">
                    {userInfo.displayName}
                  </div>
                </HtmlTooltip>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
