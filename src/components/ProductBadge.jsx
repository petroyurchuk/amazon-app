const ProductBadge = ({ badge }) => {
  const checkBadge = () => {
    if (badge === "choice")
      return (
        <span className="text-xs xl:text-sm bg-slate-800 text-white p-1">
          Amazon's <span className="text-orange-500">Choice</span>
        </span>
      );
    if (badge === "seller")
      return (
        <span className="text-xs xl:text-sm bg-orange-500 text-white p-1">
          #1 Best Seller
        </span>
      );
    if (badge === "limited")
      return (
        <span className="text-xs xl:text-sm bg-red-800 text-white p-1">
          Limited Time Deal
        </span>
      );
    return <div></div>;
  };
  return checkBadge();
};
export default ProductBadge;
