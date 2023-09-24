import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { productID } = useParams();
  const [product, setProduct] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3040/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);
  return (
    <>
      {product && (
        <div>
          <div
            className="flex flex-col p-14 lgl:flex-row justify-center lgl:justify-between"
            key={product.id}
          >
            <div className="max-w-[30rem] lgl:mr-4 ">
              <img src={product.image} alt="product-img" />
            </div>
            <div className="max-w-2xl p-5">
              <h1 className="text-4xl font-medium mb-8">{product.title}</h1>
              <hr className="border-b border-solid border-gray-300 mt-5 mb-2" />
              <p className="text-lg font-normal mb-2 text-gray-500">
                Category: {product.category}
              </p>
              <p className="text-xl font-normal">{product.description}</p>
              <div className="flex flex-row  mt-5">
                <div className="text-yellow-500 text-sm">
                  <Icon size={22} icon={star} />
                  <Icon size={22} icon={star} />
                  <Icon size={22} icon={star} />
                  <Icon size={22} icon={star} />
                  <Icon size={22} icon={star} />
                </div>
                <p className="ml-2 text-gray-500">
                  {product.rating.count} ratings
                </p>
              </div>
              <hr className="border-b border-solid border-gray-300 mt-5 mb-2" />
              <p className="text-4xl">
                <sup>EGP</sup> {product.price}
              </p>
              <div className="flex flex-col">
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className=" w-56 font-medium bg-gradient-to-tr from-yellow-400 to-yellow-200  hover:from-yellow-300 hover:to-yellow-400 duration-200 py-1.5 rounded-md mt-3"
                >
                  Add to wishlist
                </button>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className=" w-56 font-medium bg-gradient-to-tr from-yellow-400 to-yellow-200  hover:from-yellow-300 hover:to-yellow-400 duration-200 py-1.5 rounded-md mt-3"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductDetails;
