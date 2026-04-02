
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, MapPin, Calendar, Target, Phone, User } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Tanveer singh Cheema",
      role: "Founder",
      phone: "+91 9878555767",
      icon: <User className="h-6 w-6" />
    },
    {
      name: "Viany Jain",
      role: "Manager",
      phone: "+91 6376763870",
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "Gurupratap Singh Sidhu",
      role: " Assitant Manager",
      phone: "+91 9024919724",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const Tariningcoordinator = [
    { name: "Hiamsnhu Soni", phone: "9530308448" },
  ];

  const specialties = [
    "Robotics", "Automation", "Software Development", 
    "3D Modelling", "3D Printing", "Embedded System", 
    "Drives", "Manufacturing"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RENAO ROBOTICS</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pioneering the future of robotics and automation in India since 2023
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                RENAO ROBOTICS PRIVATE LIMITED (ESTD. 2023) is a firm where we design, develop and manufacture 
                industrial robotic machinery as well as automated household appliances. We aim to make robotics 
                an affordable solution for all Indians.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thus our team work tirelessly round the clock in order to provide satisfactory outcomes and 
                innovative solutions that transform the way people interact with technology.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                alt="Robotics Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Headquarters</h3>
              <p className="text-gray-600">Rupnagar, Punjab</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Founded</h3>
              <p className="text-gray-600">2023</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission</h3>
              <p className="text-gray-600">Affordable Robotics</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team</h3>
              <p className="text-gray-600">Expert Engineers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the visionaries behind RENAO ROBOTICS</p>
          </div>

          {/* Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{member.phone}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Co-Assistants */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Co-Assistants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coAssistants.map((assistant, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{assistant.name}</h4>
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{assistant.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialties</h2>
            <p className="text-lg text-gray-600">Areas of expertise that drive our innovation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center font-semibold">
                {specialty}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Branch Location */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Main Office</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-600">
                    HNO. 975, Street no. 7, Dashmesh Nagar,<br />
                    Ludhiana, Punjab - 141003
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Branch Office</h3>
              <div className="flex items-start space-x-3 mb-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-600">
                   ward 27,01,Mahavir Marg,Mansarovar,sector5,<br />
                    Mansarovar, Jaipur, Rajasthan 302020
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Coordinates: 26°51'28.0"N 75°46'24.1"E
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
