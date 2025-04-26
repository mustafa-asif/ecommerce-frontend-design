import React from 'react';
import logo from '../assets/Images/logo/logo.svg';
import gitHub from '../assets/icons/gitHub.svg';
import facebook from '../assets/icons/facebook.svg';
import youtube from '../assets/icons/youtube.svg';
import linkedin from '../assets/icons/linkedin.svg';

const aboutSection = [
  {
    title: 'About',
    links: ['About Us', 'Find store', 'Categories', 'Blogs'],
  },
  {
    title: 'Partnership',
    links: ['About Us', 'Find store', 'Categories', 'Blogs'],
  },
  {
    title: 'Information',
    links: ['Help Center', 'Money Refund', 'Shipping', 'Contact us'],
  },
  {
    title: 'For users',
    links: ['Login', 'Register', 'Settings', 'My Orders'],
  },
];

const Footer = () => {
  return (
    <footer className=" px-6 py-10 max-w-full ">
      <div className="max-w-full  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10
      justify-items-center">
        {/* Logo & Social */}
        <section>
          <img src={logo} alt="logo" className="mb-4 w-28" />
          <p className="text-gray-600 text-sm mb-4">
            Best information about the company goes here
          </p>
          <div className="flex gap-4">
            <img className="w-5 h-5" src={gitHub} alt="GitHub" />
            <img className="w-5 h-5" src={facebook} alt="Facebook" />
            <img className="w-5 h-5" src={youtube} alt="YouTube" />
            <img className="w-5 h-5" src={linkedin} alt="LinkedIn" />
          </div>
        </section>

        {/* About Sections */}
        <section className="md:col-span-1 lg:col-span-2 flex flex-wrap gap-8">
          {aboutSection.map((section, index) => (
            <div key={index}>
              <h2 className="font-semibold mb-2 text-gray-800">{section.title}</h2>
              <ul className="space-y-1 text-gray-600 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-blue-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* App Links */}
        <section>
          <h3 className="font-semibold mb-3 text-gray-800">Get app</h3>
          <div className="space-y-3">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                className="w-32"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                className="w-32"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
          </div>
        </section>
      </div>

      {/* Bottom note */}
    

      <div className="bg-gray-100 text-start mt-4 max-w-full px-10 py-4 text-gray-500 text-xs">
        © 2023 Ecommerce.
      </div>
    

    </footer>
  );
};

export default Footer;
