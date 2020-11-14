import React from 'react';

import './input.css';
import PropTypes from 'prop-types';

export const Input = ({ data,  placeholder,  handler })=> {

    let { type, name, value, contentLength } = data;

    return(
        <label 
            className = {contentLength?'input-label':'input-label max-symbols'}
        >
            <div className = 'input-name'>{name}</div>
            <input
                name = {name}
                type = {type}
                placeholder = {placeholder}
                value = {value}
                onChange = {handler}
            >
            </input>
        </label>
    )
}

Input.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.oneOf(['text', 'password', 'number']).isRequired,
        value: PropTypes.oneOfType([PropTypes.string,PropTypes.any]),
        contentLength: PropTypes.bool,
        contentMaxLength: PropTypes.number
    }),
    placeholder: PropTypes.string,
    handler: PropTypes.func.isRequired
}