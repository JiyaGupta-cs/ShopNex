import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sorting, setSorting] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productsPerPage = 12;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSorting("");
  }, [props.category]);

  useEffect(() => {
    const productsCopy = [...all_product];
    if (sorting === "0") {
      productsCopy.sort((a, b) => a.new_price - b.new_price);
    } else if (sorting === "1") {
      productsCopy.sort((a, b) => b.new_price - a.new_price);
    }
    setFilteredProducts(productsCopy);
  }, [sorting, all_product]);

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const totalProducts = filteredProducts.length;

  const handleExploreMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>{`Showing ${startIndex + 1}-${Math.min(endIndex, totalProducts)}`}</span> out of {totalProducts} products
        </p>
        <select
          name="shopcategory-sort"
          value={sorting}
          onChange={(e) => setSorting(e.target.value)}
          className="shopcategory-sort"
        >
          <option value="" disabled selected hidden>
            Sort By
          </option>
          <option value="0">Low to High</option>
          <option value="1">High to Low</option>
        </select>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.slice(startIndex, endIndex).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      {endIndex < totalProducts && (
        <div className="shopcategory-loadmore" onClick={handleExploreMore}>
          Explore More
        </div>
      )}
    </div>
  );
};


export default ShopCategory;
