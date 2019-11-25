import React from 'react';

const DefaultStyle ={
    fontSize: '24px',
    lineHeight: '18px'
};

const Heading = props =>
    <h1 style={props.style ? props.style : DefaultStyle}>
        {props.text}
    </h1>;

export default Heading;