import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";

const Benefits = () => {
  return (
    <Section id="benefits" className="bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Why Choose Campus Rider?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl hover:shadow-2xl transition-all duration-300 group shadow-lg"
              key={item.id}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <img
                    src={item.iconUrl}
                    width={24}
                    height={24}
                    alt={item.title}
                  />
                </div>
                
                <h5 className="h5 mb-4">{item.title}</h5>
                <p className="body-2 mb-6 text-light-3 flex-grow">{item.text}</p>
                
                <div className="flex items-center mt-auto">
                  <p className="font-code text-xs font-bold text-light-1 uppercase tracking-wider">
                    Learn more
                  </p>
                  <Arrow />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
