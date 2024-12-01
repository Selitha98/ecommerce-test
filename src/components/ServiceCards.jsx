import React from 'react';
import { Truck, Shield, CreditCard } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: '24h Delivery',
      description: 'Fast delivery within 24 hours'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Secure Payment',
      description: 'Fully secured payment process'
    },
    {
      icon: <CreditCard className="w-12 h-12 text-purple-600" />,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $100'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 my-16">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;