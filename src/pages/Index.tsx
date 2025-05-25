
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Bot, Zap, Shield, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: <Bot className="h-12 w-12 text-blue-600" />,
      title: "Industrial Robotics",
      description: "Advanced robotic machinery designed for industrial applications with precision and reliability."
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: "Home Automation",
      description: "Smart household appliances that make your daily life more convenient and efficient."
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensuring the highest standards in all our products."
    },
    {
      icon: <Award className="h-12 w-12 text-purple-600" />,
      title: "Affordable Solutions",
      description: "Making cutting-edge robotics technology accessible and affordable for all Indians."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RENAO ROBOTICS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovation, affordability, and reliability to deliver world-class robotics solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About RENAO ROBOTICS</h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2023, RENAO ROBOTICS PRIVATE LIMITED is dedicated to designing, 
                developing and manufacturing industrial robotic machinery as well as automated 
                household appliances.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to make robotics an affordable solution for all Indians through 
                innovative technology and round-the-clock dedication.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="Programming and Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialties</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions across multiple domains</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["Robotics", "Automation", "Software Development", "3D Modelling", "3D Printing", "Embedded System", "Drives", "Manufacturing"].map((specialty, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center font-semibold">
                {specialty}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your robotics and automation requirements
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us Now
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
