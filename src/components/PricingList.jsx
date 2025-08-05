import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex justify-center gap-[2rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[22rem] max-lg:w-full h-full px-8 py-10 bg-gradient-to-br from-white to-gray-50 rounded-[2rem] lg:w-auto shadow-lg"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-light-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && item.price !== "Contact" ? (
              <>
                <div className="h3">{item.currency}</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            ) : (
              <div className="text-[2.5rem] leading-none font-bold text-gradient">
                Contact Sales
              </div>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price && item.price !== "Contact" ? "#pricing" : "mailto:business@govv.com"}
            white={!!item.price && item.price !== "Contact"}
          >
            {item.price && item.price !== "Contact" ? "Buy Now" : "Contact Sales"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
