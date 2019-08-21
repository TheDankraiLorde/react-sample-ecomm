import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component'
import {selectCollectionHeaders} from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) =>(
    <div className="shop-page">
        {
            collections.map(
                ({id,...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                )
            )
        }
    </div>
)

const mstp = createStructuredSelector({
    collections: selectCollectionHeaders
})

export default connect(mstp)(CollectionsOverview)