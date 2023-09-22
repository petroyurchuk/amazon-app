import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductDetails } from "../components";
import { GB_CURRENCY } from "../utils/constants";
import { addToCart } from "../redux/cart//slice";
import Loader from "../components/Loader";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [quantity, setQuantity] = React.useState("1");
  const dispatch = useDispatch();
  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          "https://650712b83a38daf4803f1490.mockapi.io/items"
        );
        setProduct(data[id]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="h-screen bg-amazonClone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-400">
        <div className="grid grid-cols-10 gap-2">
          {/* left */}
          <div className="col-span-3 p-8 bg-white rounded m-auto">
            <img src={`${product.image}`} alt={product.title} />
          </div>
          {/* middle */}
          <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
            <div className="mb-3">
              <ProductDetails product={product} ratings={true} />
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-2 p-4 rounded bg-white">
            <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
              {GB_CURRENCY.format(product.price)}
            </div>
            <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">
              RRP:{" "}
              <span className="line-through">
                {GB_CURRENCY.format(product.oldPrice)}
              </span>
            </div>
            <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
              FREE Returns
            </div>
            <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
              FREE Delivery
            </div>
            <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
              In Stock
            </div>
            <div className="text-base xl:text-lg mt-1">
              Quantity:
              <select
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                className="p-2 bg-white border rounded-md focus:border-indigo-600"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <Link to={"/checkout"}>
              <button
                onClick={() => {
                  dispatch(addToCart(addQuantityToProduct()));
                }}
                className="btn"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
