
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Bot, Zap, Shield, Award, ArrowRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Software Development",
      description: "Custom software solutions, web applications, and embedded systems programming for diverse industry needs."
    },
    {
      icon: <Bot className="h-12 w-12 text-green-600" />,
      title: "Industrial Robotics",
      description: "Advanced robotic machinery designed for industrial applications with precision and reliability."
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: "Automation Solutions",
      description: "Smart automation systems and household appliances that make your daily life more convenient and efficient."
    },
    {
      icon: <Award className="h-12 w-12 text-purple-600" />,
      title: "Affordable Technology",
      description: "Making cutting-edge software and robotics technology accessible and affordable for all Indians."
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
              We combine software innovation, hardware expertise, and affordability to deliver world-class technology solutions
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
                developing and manufacturing industrial robotic machinery, software solutions, 
                and automated household appliances.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to make advanced technology and robotics an affordable solution for all Indians through 
                innovative software development and round-the-clock dedication.
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
                alt="Software Development and Technology"
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
            <p className="text-xl text-gray-600">Comprehensive technology solutions across multiple domains</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["Software Development", "Robotics", "Automation", "3D Modelling", "3D Printing", "Embedded System", "Drives", "Manufacturing"].map((specialty, index) => (
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
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your software development, robotics, and automation requirements
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
