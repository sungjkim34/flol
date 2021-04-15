import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'flol' })
            : (f) => f,
    );
    const store = createStore(rootReducer, initialState, enhancer);

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
