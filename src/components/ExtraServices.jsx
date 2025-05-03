import React from 'react';
import { FaSearch, FaBoxOpen, FaPlane, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Source from Industry Hubs',
    image: '/images/image1.jpg',
    icon: <FaSearch className="w-5 h-5 text-gray-500" />,
  },
  {
    title: 'Customize Your Products',
    image: '/images/image2.jpg',
    icon: <FaBoxOpen className="w-5 h-5 text-gray-500" />,
  },
  {
    title: 'Fast, reliable shipping by ocean or air',
    image: '/images/image3.jpg',
    icon: <FaPlane className="w-5 h-5 text-gray-500" />,
  },
  {
    title: 'Product monitoring and inspection',
    image: '/images/image4.jpg',
    icon: <FaShieldAlt className="w-5 h-5 text-gray-500" />,
  },
];

const regions = [
  { name: 'Arabic Emirates', domain: 'shopname.ae', flag: '/flags/uae.svg' },
  { name: 'Australia', domain: 'shopname.au', flag: '/flags/australia.svg' },
  { name: 'United States', domain: 'shopname.us', flag: '/flags/usa.svg' },
  { name: 'Russia', domain: 'shopname.ru', flag: '/flags/russia.svg' },
  { name: 'Italy', domain: 'shopname.it', flag: '/flags/italy.svg' },
  { name: 'Denmark', domain: 'denmark.com.dk', flag: '/flags/denmark.svg' },
  { name: 'France', domain: 'shopname.com.fr', flag: '/flags/france.svg' },
  { name: 'China', domain: 'shopname.ae', flag: '/flags/china.svg' },
  
];

const ExtraServices = () => {
  return (
    <section className="bg-gray-50 py-8 px-4">
      <header className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Our extra services</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {services.map((service, idx) => (
          <article
            key={idx}
            className="bg-white rounded shadow-sm overflow-hidden relative"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-700">{service.title}</h3>
            </div>
            <div className="absolute p-4 bg-blue-100  bottom-9 right-2 rounded-full shadow">
              {service.icon}
            </div>
          </article>
        ))}
      </div>

      <footer>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Suppliers by region</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-600">
          {regions.map((region, idx) => (
            <li key={idx}>
              <span className="inline-flex items-center gap-1">
                <img src={region.flag} alt="" className="w-5 h-3 text-gray-400" />
                {region.name}
              </span>
              <br />
              <a href="#" className="text-gray-600">{region.domain}</a>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
};

export default ExtraServices;
