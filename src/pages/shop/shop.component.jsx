import React, {useEffect} from 'react'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchCollStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({fetchCollStart, match}) => {
    useEffect(() => {
        fetchCollStart()
    },
    [fetchCollStart])
        
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
    )
}


const mdtp = dispatch => ({
    fetchCollStart: () => dispatch(fetchCollStart())
})

export default connect(null,mdtp)(ShopPage)