import { useSelector, useDispatch } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  deleteFromCart,
  clear,
  decreamentQuantity,
  increamentQuantity,
} from "../store/cartSlice";
import { emptyCart } from "../assets/index";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price;
    return acc;
  }, 0);
  return (
    <div className=" bg-gray-100 p-4 ">
      {cart.length > 0 ? (
        <div className="container mx-auto h-full xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div
              className="font-titlefont flex items-center justify-between border-b-[1px]
      border-b-gray-400 py-3"
            >
              <h2 className="text-3xl font-medium">Shopping Cart</h2>
            </div>
            <div>
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
                >
                  <div className="w-[70%] mdl:w-[30%]">
                    <img
                      className="w-full object-contain"
                      src={product.image}
                      alt="productImg"
                    />
                  </div>
                  <div className="w-[35%] mdl:w-[70%]">
                    <h2 className="font-semibold text-lg">
                      {product.title.substring(0, 40)}...
                    </h2>
                    <p className="text-base">
                      Unit Price{" "}
                      <span className="font-semibold">${product.price}</span>
                    </p>
                    <div
                      className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24
             py-1 text-center drop-shadow-lg rounded-md"
                    >
                      <p>Qty:</p>
                      <p
                        onClick={() => dispatch(decreamentQuantity(product))}
                        className="cursor-pointer bg-gray-200 px-1 rounded-md
              hover:bg-gray-400 duration-300"
                      >
                        -
                      </p>
                      <p>{product.quantity}</p>
                      <p
                        onClick={() => dispatch(increamentQuantity(product))}
                        className="cursor-pointer bg-gray-200 px-1 rounded-md
              hover:bg-gray-400 duration-300"
                      >
                        +
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(deleteFromCart(product))}
                      className="bg-red-500 w-36 py-1 rounded-lg text-white
             mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                    >
                      Delete Item
                    </button>
                  </div>
                  <div className="w-1/5">
                    <p className="text-lg font-titleFont font-semibold ">
                      ${product.price * product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full py-2">
              <button
                onClick={() => dispatch(clear())}
                className="bg-red-500 w-36 py-1 rounded-lg text-white
        mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4">
            <div>
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <CheckCircleIcon className="bg-white text-green-500 rounded-full" />
                </span>{" "}
                Your ordervqualifies for Free Shipping Choose this option at
                checkout. See details....
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 flex items-center gap-2 justify-between">
                Total:<span className="text-lg font-bold">${totalPrice}</span>
              </p>
            </div>
            <div>
              <button
                className=" w-full font-medium bg-gradient-to-tr
         from-yellow-400 to-yellow-200  hover:from-yellow-300 hover:to-yellow-400 duration-200 
         py-1.5 rounded-md mt-3 px-10 "
              >
                Proceed To Pay
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4 py-10">
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg ">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve . Give it purpose . fill it with
              books , electronics , videos , etc . and make it happy.
            </p>
            <Link to="/">
              <button
                className=" w-full font-medium bg-gradient-to-tr
         from-yellow-400 to-yellow-200  hover:from-yellow-300 hover:to-yellow-400 duration-200 
         py-1.5 rounded-md mt-3 px-10 "
              >
                Continue shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
