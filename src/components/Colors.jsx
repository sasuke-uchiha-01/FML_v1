import Section from "./Section";
import Heading from "./Heading";
import { campusRiderColors } from "../constants";
import { service1 } from "../assets";
import { useState } from "react";

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState(campusRiderColors[0]);

  return (
    <Section className="overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50" id="colors">
      <div className="container relative z-2">
        <Heading
          tag="Choose Your Style"
          title="4 Stunning Colors Available"
        />

        <div className="relative">
          {/* Large Selected Color Display */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-br from-white to-gray-50 rounded-[2rem] p-12 max-w-4xl shadow-2xl">
              <h3 className="h2 mb-6">Selected: {selectedColor.name}</h3>
              <div className="w-96 h-64 rounded-[2rem] mx-auto mb-8 overflow-hidden">
                <img
                  src={service1}
                  alt={`Campus Rider in ${selectedColor.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="body-1 text-light-1/50 max-w-2xl mx-auto">
                {selectedColor.description}
              </p>
            </div>
          </div>

          {/* Small Color Dots Selection */}
          <div className="flex justify-center gap-6">
            {campusRiderColors.map((color) => (
              <div
                key={color.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setSelectedColor(color)}
              >
                <div
                  className={`w-8 h-8 rounded-full mb-2 transition-all duration-300 ${
                    selectedColor.id === color.id
                      ? "scale-125 ring-2 ring-white shadow-lg"
                      : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="h5 text-center">{color.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Colors; 