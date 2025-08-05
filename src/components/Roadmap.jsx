import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { check, done, undone } from "../assets";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden bg-gradient-to-br from-gray-50 to-orange-50" id="roadmap">
      <div className="container relative z-2">
        <Heading tag="Our Journey" title="GOVV's Roadmap to Sustainable Mobility" />

        <div className="relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline Line */}
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transform translate-x-1/2" />
                )}
                
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group shadow-lg">
                  {/* Status Icon */}
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                    <img
                      src={item.status === "done" ? done : undone}
                      width={48}
                      height={48}
                      alt={item.status}
                    />
                  </div>

                  {/* Date */}
                  <div className="text-center mb-4">
                    <p className="body-2 text-gradient font-bold">{item.date}</p>
                  </div>

                  {/* Title */}
                  <h4 className="h4 text-center mb-4">{item.title}</h4>

                  {/* Description */}
                  <p className="body-2 text-light-3 text-center mb-4">{item.text}</p>

                  {/* Features List */}
                  {item.features && (
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <img src={check} width={16} height={16} alt="check" className="mr-2" />
                          <span className="body-2 text-light-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Status Badge */}
                  <div className="mt-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === "done" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {item.status === "done" ? "Completed" : "In Progress"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future Vision */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8">
              <h3 className="h3 mb-4">Our Vision for 2025</h3>
              <p className="body-1 text-light-1/70 max-w-3xl mx-auto">
                Expanding to 50+ campuses across India, introducing advanced AI-powered features, 
                and establishing GOVV as the leading sustainable mobility solution for educational institutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                  <p className="body-2 text-light-1/50">Campuses</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">10,000+</div>
                  <p className="body-2 text-light-1/50">Riders</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                  <p className="body-2 text-light-1/50">Sustainable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
