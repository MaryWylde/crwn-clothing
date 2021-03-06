import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/menu-item/collection-preview copy/collection-preview.component';



class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
              
        }
    }
    render(){
        // destructuring 
        const {collections} = this.state;
        return (<div className='shop-page'> 

          {
              collections.map(({id, ...otherCollectionProps}) => (
<CollectionPreview key={id} {...otherCollectionProps}> </CollectionPreview>
              ))
          }
             </div>)
    }
}

export default ShopPage;