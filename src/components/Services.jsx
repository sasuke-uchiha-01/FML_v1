import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { govvServices, govvServicesIcons } from "../constants";
import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-gradient text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Introducing
            </span>
          </div>
          
          <h1 className="h1 mb-6 text-6xl lg:text-8xl font-bold">
            Campus Rider{" "}
            <span className="inline-block bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Electric Cycle
            </span>
          </h1>
          
          <p className="body-1 max-w-4xl mx-auto mb-8 text-xl lg:text-2xl text-light-3">
            Revolutionizing campus mobility with sustainable electric transportation. 
            Zero emissions, maximum convenience, and unmatched style for modern students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="button bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Get Campus Rider - ₹24,999
            </button>
            <button className="button bg-light-11 hover:bg-light-10 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300">
              Book Test Ride
            </button>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="h3 mb-2">35-40km Range</h4>
              <p className="body-2 text-light-1/50">Long battery life</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="h3 mb-2">25km/hr Speed</h4>
              <p className="body-2 text-light-1/50">Perfect for campus</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="h3 mb-2">Zero Emissions</h4>
              <p className="body-2 text-light-1/50">Eco-friendly ride</p>
            </div>
          </div>
        </div>

        {/* Main Product Showcase */}
        <div className="relative">
          <div className="relative z-1 flex items-center h-[40rem] mb-8 p-8 rounded-3xl overflow-hidden lg:p-20 xl:h-[45rem] bg-gradient-to-br from-white to-gray-100 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-2/5 xl:w-auto">
              <img
                className="w-full h-full object-contain md:object-center transform hover:scale-105 transition-transform duration-700"
                width={600}
                alt="Campus Rider Electric Cycle"
                height={500}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[25rem] ml-auto">
              <h4 className="h2 mb-6 text-gradient">Campus Rider Features</h4>
              <p className="body-1 mb-8 text-light-3">
                Advanced features that make every ride smooth, safe, and enjoyable
              </p>
              <ul className="space-y-4">
                {govvServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <img width={16} height={16} src={check} />
                    </div>
                    <p className="body-1 text-light-1">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* Feature Cards Grid */}
          <div className="relative z-1 grid gap-8 lg:grid-cols-2">
            <div className="relative min-h-[45rem] rounded-3xl overflow-hidden group">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={630}
                  height={750}
                  alt="Smart Technology"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-transparent via-transparent to-light-13/90 lg:p-15">
                <h4 className="h2 mb-6 text-white">Smart Technology</h4>
                <p className="body-1 mb-6 text-light-3">
                  Advanced IoT integration with real-time monitoring and smart connectivity features.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm text-white">GPS Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm text-white">Mobile App</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm text-white">Battery Monitor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm text-white">Anti-Theft</span>
                  </div>
                </div>
                <p className="body-2 text-light-3">
                  Integrated LED lighting, horn, and dust-proof sensors for enhanced safety and convenience on every ride.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden lg:min-h-[45rem] group hover:shadow-2xl transition-all duration-300 shadow-lg">
              <div className="py-12 px-6 xl:px-12">
                <h4 className="h2 mb-6 text-gradient">Eco-Friendly Design</h4>
                <p className="body-1 mb-8 text-light-3">
                  Zero emissions transportation that helps reduce your carbon 
                  footprint while saving on fuel costs.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {govvServicesIcons.map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-2xl flex items-center justify-center p-4 group-hover:scale-110 transition-transform ${
                        index === 2
                          ? "bg-gradient-to-r from-blue-500 to-purple-500"
                          : "bg-gradient-to-r from-gray-100 to-gray-200"
                      }`}
                    >
                      <img src={item} width={32} height={32} alt={item} />
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl">
                    <span className="body-1">Battery Life</span>
                    <span className="body-1 font-bold text-gradient">35-40km</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl">
                    <span className="body-1">Charging Time</span>
                    <span className="body-1 font-bold text-gradient">5 hours</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl">
                    <span className="body-1">Max Speed</span>
                    <span className="body-1 font-bold text-gradient">25km/hr</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[25rem] bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl overflow-hidden md:h-[30rem] group-hover:shadow-xl transition-all duration-300">
                <img
                  src={service3}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={520}
                  height={400}
                  alt="Campus Rider in action"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
