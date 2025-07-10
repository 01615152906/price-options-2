import React from 'react';
import PropTypes from 'prop-types';
// import { FaCheck } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
const Feature = ({feature}) => {
    return (
        <div>
            
            <p className='flex items-center'> 
  <FaRegCircleCheck className='text-green-500  mr-2' />
                {feature} </p>
        </div>
    );
};

Feature.PropTypes = {
  feature: PropTypes.string
}
export default Feature;