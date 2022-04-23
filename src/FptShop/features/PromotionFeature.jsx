import React, { useEffect, useState } from "react";
// import PromotionList from "../components/PromotionList";
import { FaCertificate } from "react-icons/fa";
import ProductFetch2 from "../components/ProductFetch2";

const PromotionFeature = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/user"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setProducts(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  // Loading
  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowProducts = () => {
    return (
      <ul className="flex items-center lg:w-[1200px] flex-wrap w-[400px]">
        {products.map((productFetch2) => (
          <li key={productFetch2.id} className="w-[800px] lg:w-[300px]">
            <ProductFetch2 productFetch2={productFetch2} />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="mt-[90px] lg:w-[1280px] lg:ml-[331px] lg:h-[552px] border border-white bg-white">
      <div className="flex items-center ml-[30px] mt-[5px]">
        <li className="list-none w-[25px] h-[30px] text-gray-600 mt-5">
          <FaCertificate />
        </li>
        <h2 className="w-[280px] font-bold h-[26px] text-[#CD1817] text-[22px]">
          KHUYẾN MÃI HOT
        </h2>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default PromotionFeature;
