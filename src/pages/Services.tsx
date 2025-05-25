
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bot, Cpu, Settings, Printer, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-blue-600" />,
      title: "Industrial Robotics",
      description: "Custom designed industrial robotic machinery for manufacturing and automation processes.",
      features: ["Custom Design", "High Precision", "Cost Effective", "24/7 Support"]
    },
    {
      icon: <Settings className="h-12 w-12 text-green-600" />,
      title: "Automation Solutions",
      description: "Complete automation systems for various industries to improve efficiency and reduce costs.",
      features: ["Process Automation", "Quality Control", "Smart Systems", "Remote Monitoring"]
    },
    {
      icon: <Code className="h-12 w-12 text-purple-600" />,
      title: "Software Development",
      description: "Custom software solutions for robotics control and automation management.",
      features: ["Control Systems", "User Interfaces", "Data Analytics", "Cloud Integration"]
    },
    {
      icon: <Printer className="h-12 w-12 text-orange-600" />,
      title: "3D Printing & Modeling",
      description: "Advanced 3D modeling and printing services for prototyping and production.",
      features: ["Rapid Prototyping", "Custom Parts", "Design Optimization", "Material Selection"]
    },
    {
      icon: <Cpu className="h-12 w-12 text-red-600" />,
      title: "Embedded Systems",
      description: "Specialized embedded system solutions for robotics and IoT applications.",
      features: ["Microcontroller Programming", "Sensor Integration", "Real-time Systems", "IoT Connectivity"]
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: "Drive Systems",
      description: "High-performance drive systems and motor control solutions.",
      features: ["Motor Control", "Variable Frequency Drives", "Servo Systems", "Power Electronics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive robotics and automation solutions tailored to your needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our robotics solutions can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Today
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
