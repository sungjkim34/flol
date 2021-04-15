import { combineReducers } from 'redux';

const test = (state = null, action) => {
    switch (action.type) {
        case 'TEST':
            return 'awef';
        default:
            return state;
    }
}

export default combineReducers({
    test
});