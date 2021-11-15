import React from 'react';
import IconsSVG from './icons.svg';

interface Iicons {
  name: string,
  color: string,
  size: string,
  className: string
}

function Icons({name, color, size, className}: Iicons) {

  return(
    <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

export default Icons;