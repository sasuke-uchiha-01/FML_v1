import Section from "./Section";
import Heading from "./Heading";
import { campusRiderSpecs } from "../constants";

const Specifications = () => {
  return (
    <Section className="overflow-hidden bg-gradient-to-br from-gray-50 to-green-50" id="specs">
      <div className="container relative z-2">
        <Heading
          tag="Technical Excellence"
          title="Campus Rider Specifications"
        />

        <div className="relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campusRiderSpecs.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-8 hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                <h3 className="h3 mb-6 text-gradient">{category.category}</h3>
                <ul className="space-y-4">
                  {category.specs.map((spec, specIndex) => (
                    <li
                      key={specIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="body-2 text-light-1">{spec}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-[2rem] p-8">
              <h3 className="h3 mb-4">Why Choose Campus Rider?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="h4 mb-2">Zero Emissions</h4>
                  <p className="body-2 text-light-1/50">Eco-friendly transportation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="h4 mb-2">Cost Effective</h4>
                  <p className="body-2 text-light-1/50">Save on fuel and maintenance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="h4 mb-2">High Performance</h4>
                  <p className="body-2 text-light-1/50">Powerful and reliable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Specifications; 