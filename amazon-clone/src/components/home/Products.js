import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../../store/ProductsSlice";
import { addToCart } from "../../store/cartSlice";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchproducts());
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="bg-white min-h-[550px] h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-lg duration-200 relative"
          >
            <Link to={`/products/${product.id}`}>
              <div className="w-full h-auto flex items-center justify-center">
                <img
                  className="w-52 h-64 object-contain"
                  src={product.image}
                  alt="ProductImg"
                />
              </div>
            </Link>
            <div className="items-center px-4">
              <Link to={`/products/${product.id}`}>
                <div className="flex flex-col items-center px-4">
                  <h2 className="text-xl font-medium">{product.title}</h2>
                  <h3>{product.description.substring(0, 100)}...</h3>
                  <p className="text-2xl font-normal">
                    <div className="text-yellow-500 text-sm">
                      <Icon size={25} icon={star} />
                      <Icon size={25} icon={star} />
                      <Icon size={25} icon={star} />
                      <Icon size={25} icon={star} />
                      <Icon size={25} icon={star} />
                    </div>
                    <sup>EGP</sup> {product.price}
                  </p>
                </div>
              </Link>
              <button
                onClick={() => dispatch(addToCart(product))}
                className=" w-full font-medium bg-gradient-to-tr from-yellow-400 to-yellow-200  hover:from-yellow-300 hover:to-yellow-400 duration-200 py-1.5 rounded-md mt-3"
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
