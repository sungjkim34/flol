import { spawn } from 'redux-saga/effects';
import EventSaga from './event';

export default function* rootSaga() {
    yield spawn(EventSaga);
}