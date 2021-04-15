import {
    FETCH_EVENT,
    FETCH_EVENT_FAILURE,
    FETCH_EVENT_SUCCESS
} from './types';

export const fetchEvent = (eventId) => ({ type: FETCH_EVENT, eventId });
export const fetchEventSuccess = (event) => ({ type: FETCH_EVENT_SUCCESS, event });
export const fetchEventFailure = (error) => ({ type: FETCH_EVENT_FAILURE, error });