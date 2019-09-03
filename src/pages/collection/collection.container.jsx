import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import Spinner from '../../components/spinner/spinner.component'
import CollectionPage from './collection.component'
import { selCollLoaded } from '../../redux/shop/shop.selectors';

const mstp = createStructuredSelector({
    isCollLoaded: (state) => selCollLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mstp),
    Spinner
)(CollectionPage)

export default CollectionPageContainer