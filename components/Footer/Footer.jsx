import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#212529] text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Huge Text */}
          <div>
            <h2 className="text-6xl md:text-8xl font-bold leading-tight text-gray-100 mb-6">
              Let's
              <br />
              <span className="text-[#f8f9fa]">Connect</span>
            </h2>
          </div>

          {/* Right Side - Links & Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/khalidoukoujane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
                >
                  GitHub
                </a>
                <a
                  href="https://instagram.com/e.shirouu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-lg"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <a
                href="mailto:khalidoukoujane72@@example.com"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
              >
                khalidoukoujane72@@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 khalid. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
