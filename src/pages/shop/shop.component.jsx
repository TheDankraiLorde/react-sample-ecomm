import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.components'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux'
import Spinner from '../../components/spinner/spinner.component';
import { fetchCollStartAsync } from '../../redux/shop/shop.actions';
import {createStructuredSelector} from 'reselect'
import { selectIsCollFetch } from '../../redux/shop/shop.selectors';
const CollOverviewWithSpinner = Spinner(CollectionsOverview)
const CollPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends React.Component
{
    componentDidMount(){
        const {fetchCollStartAsync} = this.props;
        fetchCollStartAsync();
    }

    render(){
        const {match, isCollFetching}=this.props
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=> <CollOverviewWithSpinner isLoading={isCollFetching} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props)=> <CollPageWithSpinner isLoading={isCollFetching} {...props}/>}/>
            </div>
        )
    }
}

const mstp = createStructuredSelector({
    isCollFetching: selectIsCollFetch
})

const mdtp = dispatch => ({
    fetchCollStartAsync: () => dispatch(fetchCollStartAsync())
})

export default connect(mstp,mdtp)(ShopPage)