import { connect } from 'react-redux';

import { fetchEvent } from '../../actions/event/actions';
// import {} from '../../reducers/event';
import Home from './home';

export const mapStateToProps = (state) => ({
    // isLoading: getIsLoading(state),/
});

export const mapDispatchToProps = {
    fetchEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
