import React from 'react';
import { FaSearch, FaBoxOpen, FaPlane, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Source from Industry Hubs',
    image: '/images/industry-hubs.jpg',
    icon: <FaSearch className="w-5 h-5 text-blue-500" />,
  },
  {
    title: 'Customize Your Products',
    image: '/images/customize-products.jpg',
    icon: <FaBoxOpen className="w-5 h-5 text-blue-500" />,
  },
  {
    title: 'Fast, reliable shipping by ocean or air',
    image: '/images/shipping.jpg',
    icon: <FaPlane className="w-5 h-5 text-blue-500" />,
  },
  {
    title: 'Product monitoring and inspection',
    image: '/images/product-monitoring.jpg',
    icon: <FaShieldAlt className="w-5 h-5 text-blue-500" />,
  },
];

const regions = [
  { name: 'Arabic Emirates', domain: 'shopname.ae', flag: '/flags/uae.png' },
  { name: 'Australia', domain: 'shopname.au', flag: '/flags/australia.png' },
  { name: 'United States', domain: 'shopname.us', flag: '/flags/usa.png' },
  { name: 'Russia', domain: 'shopname.ru', flag: '/flags/russia.png' },
  { name: 'Italy', domain: 'shopname.it', flag: '/flags/italy.png' },
  { name: 'Denmark', domain: 'denmark.com.dk', flag: '/flags/denmark.png' },
  { name: 'France', domain: 'shopname.com.fr', flag: '/flags/france.png' },
  { name: 'China', domain: 'shopname.ae', flag: '/flags/china.png' },
  { name: 'Great Britain', domain: 'shopname.co.uk', flag: '/flags/uk.png' },
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
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
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
                <img src={region.flag} alt="" className="w-5 h-3" />
                {region.name}
              </span>
              <br />
              <a href="#" className="text-blue-600">{region.domain}</a>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
};

export default ExtraServices;
