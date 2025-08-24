import React from 'react'
import parse from 'html-react-parser';


const Heading = ({variant = "h3", className = "", text}) => {

const Tag = variant || 'h3';

  return (
    <Tag className={className}>
        {parse(text)}
    </Tag>
  )
}

export default Heading