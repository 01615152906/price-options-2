import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    const priceOptions = [
  {
    "id": "basic-001",
    "name": "Basic Membership",
    "price": 29.99,
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "1 free fitness assessment",
      "Weekday access only",
      "No contract required",
      "Access to mobile app",
      "Email support only"
    ]
  },
  {
    "id": "standard-002",
    "name": "Standard Membership",
    "price": 49.99,
    "features": [
      "24/7 gym access",
      "Group fitness classes",
      "2 guest passes/month",
      "Free Wi-Fi",
      "Locker room access",
      "Fitness tracking via app",
      "Nutrition guide (PDF)",
      "Free body composition test (1x/month)",
      "Email + chat support"
    ]
  },
  {
    "id": "premium-003",
    "name": "Premium Membership",
    "price": 69.99,
    "features": [
      "24/7 gym access",
      "Unlimited group classes",
      "1 personal training session/month",
      "Access to sauna & steam room",
      "Free Wi-Fi",
      "Free health drinks (1/day)",
      "Monthly progress report",
      "Access to premium workshops",
      "Massage chair use (30 min/day)",
      "Video consultation with dietitian (1x/month)",
      "Email + chat + phone support"
    ]
  }

]

    return (
        <div className='m-12 bg-gray-300 p-10'>
           <h2 className='text-6xl pb-5'>Best Prices in the town</h2> 

<div className=' grid md:grid-cols-3 gap-6 '>
               {

priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)

           }
</div>
        </div>
    );
};

export default PriceOptions;