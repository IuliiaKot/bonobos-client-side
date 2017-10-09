import React, {Component} from 'react';
import InventoryData from './InventoryData';
import PropTypes from 'prop-types';

class Product extends Component{
    constructor() {
        super()
        this.state = {
            inventories: [],
            showInventories: false
        }
        this.getIndentories = this.getIndentories.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    getIndentories(e) {
        e.preventDefault();
        fetch(`http://localhost:8000/api/products/${this.props.productInfo.id}/inventories.json`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState(prevState => {
                    return {showInventories: !prevState.showInventories, inventories: data}
                })
                
            })
    }

    handleClose(e){
        e.preventDefault();
        this.setState(prevState => {
            return {showInventories: !prevState.showInventories}
        })
    }

    render() {
        return (
        <div className="product-card">
            <div className="product">
                <h5>{this.props.productInfo.product_name.replace(/\b\w/g, l => l.toUpperCase())}</h5>
                <div className="info">
                    <div className="left"><img src={this.props.productInfo.product_image}/></div>
                    <div className="right"><p>{this.props.productInfo.product_description}</p>
                    
                    {this.state.showInventories
                        ?   [<a href="" onClick={this.handleClose}>Close</a>,
                            <InventoryData data={this.state.inventories} />]
                        :  <a href="" onClick={this.getIndentories}>Show Inventory</a>}
                        <div className="clear-both"></div>
                        </div>
                </div>
            </div>
        </div>
    )
    }
}

Product.propTypes = {
    productInfo: PropTypes.object.isRequired
}

export default Product;