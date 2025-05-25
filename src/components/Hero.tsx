
import React from 'react';
import { ArrowRight, Bot, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-8 flex items-center space-x-4">
              <img
                src="/lovable-uploads/ac93d420-e076-483c-ba56-7f4742a4a881.png"
                alt="RENAO ROBOTICS Logo"
                className="h-20 md:h-24"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">RENAO ROBOTICS</h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Designing, Developing & Manufacturing Industrial Robotic Machinery and Automated Household Appliances
                </p>
              </div>
            </div>
            
            <div className="mb-8 space-y-2">
              <div className="flex items-center space-x-6">
                <div className="text-blue-400 font-semibold">Est. 2023</div>
                <div className="text-blue-400 font-semibold">Punjab & Rajasthan</div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Future of <span className="text-blue-400">Technology</span> & Innovation
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Leading provider of advanced software solutions, industrial robotics, and automation systems. 
              Making cutting-edge technology accessible and affordable for all Indians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
              >
                Discover Our Vision
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <Bot className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div>
                <Cpu className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">2023</div>
                <div className="text-sm text-gray-300">Established</div>
              </div>
              <div>
                <Zap className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
              alt="Technology Innovation"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
