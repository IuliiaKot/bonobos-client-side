import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => {
    return (
        <div>
        {   props.data.map((elm, idx) => {
                return <div key={idx}><span className="style">{elm.style}</span> - <span className="count">{elm.count}</span></div>
            })
        
        }
        </div>
    )
}

Info.propTypes = {
    data: PropTypes.array.isRequired
}

export default Info;