import React from 'react'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchCollStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component
{
    componentDidMount(){
        const {fetchCollStart} = this.props;
        fetchCollStart();
    }

    render(){
        const {match}=this.props
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
            </div>
        )
    }
}


const mdtp = dispatch => ({
    fetchCollStart: () => dispatch(fetchCollStart())
})

export default connect(null,mdtp)(ShopPage)