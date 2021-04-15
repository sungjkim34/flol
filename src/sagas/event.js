import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { FETCH_EVENT } from '../actions/event/types';
import {
    fetchEventFailure,
    fetchEventSuccess
} from '../actions/event/actions';
import serviceLocator, { FLOL_SERVICE } from './service-locator';

export function* fetchEvent({ eventId }) {
    try {
        const flolService = yield call(serviceLocator, FLOL_SERVICE);
        const response = yield call([flolService, flolService.getEvent], eventId);
        yield put(fetchEventSuccess(response));
    } catch (e) {
        yield put(fetchEventFailure(e));
    }
}

export default function* EventSaga() {
    yield all([takeLatest(FETCH_EVENT, fetchEvent)]);
}
