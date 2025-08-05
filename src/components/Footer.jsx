import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-8">
          <div className="max-w-[20rem]">
            <h3 className="h3 mb-4">GOVV</h3>
            <p className="body-2 text-light-4 mb-6">
              Revolutionizing campus mobility with sustainable electric cycles. 
              Join the green transportation revolution.
            </p>
            <div className="space-y-2">
              <p className="body-2 text-light-4">Email: info@govv.com</p>
              <p className="body-2 text-light-4">Phone: +91 98765 43210</p>
              <p className="body-2 text-light-4">Address: Bangalore, India</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="h4 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="body-2 text-light-4 hover:text-light-1 transition-colors">Features</a></li>
                <li><a href="#specs" className="body-2 text-light-4 hover:text-light-1 transition-colors">Specifications</a></li>
                <li><a href="#colors" className="body-2 text-light-4 hover:text-light-1 transition-colors">Colors</a></li>
                <li><a href="#pricing" className="body-2 text-light-4 hover:text-light-1 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="h4 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="body-2 text-light-4 hover:text-light-1 transition-colors">Contact Us</a></li>
                <li><a href="#test-ride" className="body-2 text-light-4 hover:text-light-1 transition-colors">Book Test Ride</a></li>
                <li><a href="mailto:support@govv.com" className="body-2 text-light-4 hover:text-light-1 transition-colors">Customer Support</a></li>
                <li><a href="mailto:business@govv.com" className="body-2 text-light-4 hover:text-light-1 transition-colors">Business Inquiries</a></li>
              </ul>
            </div>

            <div>
              <h4 className="h4 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="body-2 text-light-4 hover:text-light-1 transition-colors">About GOVV</a></li>
                <li><a href="#careers" className="body-2 text-light-4 hover:text-light-1 transition-colors">Careers</a></li>
                <li><a href="#press" className="body-2 text-light-4 hover:text-light-1 transition-colors">Press</a></li>
                <li><a href="#privacy" className="body-2 text-light-4 hover:text-light-1 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col pt-8">
          <p className="caption text-light-4 lg:block">
            © {new Date().getFullYear()} GOVV. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-light-7 rounded-full transition-colors hover:bg-light-6"
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
