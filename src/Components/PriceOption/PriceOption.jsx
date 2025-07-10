import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {id, name, price, features } = option;
    return (

        <div className='bg-blue-500 rounded-2xl p-5 overflow-auto  text-white w-full flex flex-col'>
            
<h2 className='text-center'>
    <span className='text-5xl  font-extrabold '> {price} </span>
    <span className='text-1xl  ' > /mon</span>
</h2>
<h4 className='text-2xl my-8 text-center '> {name} </h4>

<div className='pl-5  flex-grow'>
    {
  features.map( (feature, index) => <Feature key={index} feature={feature} ></Feature>)  
}
</div>
<button className='w-full text-center bg-green-600 py-3 font-bold rounded-lg hover:bg-green-900 mt-6'>Buy Now</button>

        </div>
    );
};

PriceOption.PropTypes ={
    option: PropTypes.object
}

export default PriceOption;