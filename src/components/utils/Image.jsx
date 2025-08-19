import React from 'react'

const Image = ({source, alt="img", className, onClick}) => {
  return (
    <img src={source} alt={alt} className={className} onClick={onClick} />
  )
}

export default Image