import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.components'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component';
import {firestore, convSnapToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const CollOverviewWithSpinner = Spinner(CollectionsOverview)
const CollPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends React.Component{
    state = {
        loading: true
    }

    unsubscribeFromSnapShot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const CollRef = firestore.collection('collections')
        CollRef.get().then(snapshot => {
            const collObj = convSnapToMap(snapshot)
            updateCollections(collObj);
            this.setState({loading:false})
        })
    }

    render(){
        const {match}=this.props
        const {loading} = this.state
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=> <CollOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props)=> <CollPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )
    }
}

const mdtp = dispatch => ({
    updateCollections : collMap => dispatch(updateCollections(collMap))
})

export default connect(null,mdtp)(ShopPage)