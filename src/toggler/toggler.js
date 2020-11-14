import React from 'react';
import './toggler.css';

import PropTypes from 'prop-types'

export const Toggler = ({ children, active, action, name }) => {
    
    return(
        <div className = 'toggler'>
            <b>{name}:</b>
            {
                React.Children.count(children)>0 && (
                    <>
                        {
                            React.Children.map( children, (childItem) => {
                                if(React.isValidElement(childItem)) {
                                    return React.cloneElement(
                                        childItem,
                                        {
                                            active: childItem.props.value === active.find(elem => elem.name === name).act,
                                            action: action(childItem.props.value, name)
                                        }
                                    )
                                }
                            })
                        }
                    </>
                ) 
            }     
        </div>
    )

}

export const TogglerItem = ({ active, children, action, value}) => {

 return(
     <button
        type = 'button'
        className = {active? 'toggler-item active':'toggler-item'}
        onClick = { action }
     >
        {children||value}
     </button>
 )
}

Toggler.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
    // active: PropTypes.string,
    action: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}
Toggler.defaultProps = {
    name: 'defaultToggler'
}
TogglerItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.string,
    action: PropTypes.func,
    value: PropTypes.string   
}