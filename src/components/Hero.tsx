
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
            <div className="mb-8">
              <img
                src="/lovable-uploads/6fe61edd-5291-4a7c-ae2c-c7553d32a4b1.png"
                alt="RENAO ROBOTICS Logo"
                className="h-16 md:h-20 mb-6"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Future of <span className="text-blue-400">Technology</span> & Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Leading provider of advanced software solutions, industrial robotics, and automation systems. 
              Making cutting-edge technology accessible and affordable for all Indians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors duration-200"
              >
                Learn More
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
