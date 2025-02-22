import React from 'react'
import PropTypes from 'prop-types'
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
  return (
    <div className='my-4'>
      <div className='flex gap-3'>
        <FaCheckCircle className='text-green-300' ></FaCheckCircle>
        <p className="text-2xl">{feature}</p>
      </div>
    </div>
  )
}

Feature.propTypes = {

}

export default Feature
