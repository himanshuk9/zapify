import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      iconClass: "fas fa-money-bill-wave", // FontAwesome icon class
      title: "Money Back Guarantee",
      description: "Enjoy a 100% Money-Back Guarantee for a Risk-Free Shopping Experience!"
    },
    {
      iconClass: "fas fa-truck",
      title: "Instant Free Delivery",
      description: "Get Free Delivery on All Orders – No Hidden Costs!"
    },
    {
      iconClass: "fas fa-headset",
      title: "Quick Support System",
      description: "Experience Hassle-Free Assistance with Our Quick Support System"
    }
  ];

  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <i className={`feature-icon ${feature.iconClass}`} aria-hidden="true"></i>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
