
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "roboticsrenao@gmail.com",
      link: "mailto:roboticsrenao@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91 8168158446",
      link: "tel:+918168158446"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Main Office",
      details: "HNO. 975, Street no. 7, Dashmesh Nagar, Ludhiana, Punjab - 141003",
      link: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "24/7 Support Available",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team to discuss your robotics and automation needs
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <div className="text-blue-600">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-blue-600 hover:text-blue-800 transition-colors">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </div>
            ))}
          </div>

          {/* Company Details */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">RENAO ROBOTICS PRIVATE LIMITED</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>GSTIN:</strong> 03ABFFR9260H1Z4</p>
                  <p><strong>Website:</strong> www.renaorobotics.com</p>
                  <p><strong>Established:</strong> 2023</p>
                  <p><strong>Headquarters:</strong> Rupnagar, Punjab</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Branch Office</h3>
                <div className="space-y-3 text-gray-600">
                  <p>19-20 Khatri Nagar, near Ricco Pulia</p>
                  <p>Mansarovar, Jaipur, Rajasthan 302020</p>
                  <p><strong>Coordinates:</strong> 26°49'46.2"N 75°46'47.2"E</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <a
              href="https://in.linkedin.com/company/renao-robotics-private-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
              <span className="font-semibold">Follow us on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
