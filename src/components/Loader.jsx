import { BallTriangle } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex justify-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#FEBD69"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
