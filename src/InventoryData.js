import React, {Component} from 'react';
import Info from './Info';
import PropTypes from 'prop-types';


const  helper = (inventories) => {
        let result = inventories.reduce((obj, elm) => {
            obj[[elm.waist, elm.length]] = obj[[elm.waist, elm.length]] || []
            obj[[elm.waist, elm.length]].push({style: elm.style, count: elm.count})
            return obj
        }, {})
        return Object.keys(result).map(function (key) {
            return {size: key, info: result[key]};
        });
    }

const InventoryData = (props) => {
    const dataInventories = helper(props.data)
    return (
        <div className="inventories">
            {
                dataInventories.map((inventory, idx) => {
                    return (<div className={`column-${idx % 3}`}  key={idx} >
                                <div className="size">{inventory.size.split(',').join(" x ")}</div>
                                <div className="inventory-title">(waist length)</div>
                                <Info data={inventory.info}/>
                            </div>)
                })
            }   
        </div>
    )
}


InventoryData.propTypes = {
    data: PropTypes.array.isRequired
}

export default InventoryData;