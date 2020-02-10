import React from 'react';
import './shop-page.style.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from '../../assets/shop-data';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections : SHOP_DATA
        }
    }
    render() {
        
        return (
            <div className='shop-page'>
                {this.state.collections.map( ({id,...otherCollectionProps}) => (
                    <CollectionPreview key={id}  {...otherCollectionProps}  />
                ))}
                
            </div>
        )
    }
}


export default ShopPage
