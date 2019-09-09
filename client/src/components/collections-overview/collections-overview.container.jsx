import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Spinner from '../spinner/spinner.component'
import CollectionsOverview from './collections-overview.components'
import { selectIsCollFetch } from '../../redux/shop/shop.selectors';
import {compose} from 'redux'

const mstp = createStructuredSelector({
    isLoading: selectIsCollFetch
})

const CollectionsOverviewContainer = compose(
    connect(mstp),
    Spinner
)(CollectionsOverview)

export default CollectionsOverviewContainer