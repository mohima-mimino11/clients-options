import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({member}) => {
  const {name, features, price} = member;
  return (
    <div >
        <div className="bg-blue-500 p-6 rounded-xl text-white flex-col items-center ">
            <h2>
              <span className="text-7xl">${price}</span>
              <span className="text-2xl">/mon</span>
            </h2>
            <h3 className="text-5xl">{name}</h3>
            {
              features.map((feature , idx) => <Feature className="flex-grow" key={idx} feature={feature}></Feature>)
            }
            <button className="btn bg-green-500 hover:bg-green-800 font-bold w-full text-white">Buy Now</button>
        </div>
      
    </div>
  );
};

PriceOption.propTypes = {
  price: PropTypes.object
}
export default PriceOption;