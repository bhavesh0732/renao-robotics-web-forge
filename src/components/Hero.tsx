
import React from 'react';
import { ArrowRight, Bot, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Future of <span className="text-blue-400">Robotics</span> & Automation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Making robotics an affordable solution for all Indians through innovative design and manufacturing.
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
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <Bot className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-blue-200">Projects</div>
              </div>
              <div>
                <Cpu className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">2023</div>
                <div className="text-sm text-blue-200">Established</div>
              </div>
              <div>
                <Zap className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
              alt="Robotics Technology"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
