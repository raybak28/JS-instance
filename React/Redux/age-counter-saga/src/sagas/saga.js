//import {delay} from "redux-saga";
import {takeEvery, put, delay } from "redux-saga/effects";


 function *watchAgeUp() {
    yield takeEvery("AGE_UP", ageUpAsync);
}

function *ageUpAsync() {
    yield delay(4000);
    yield put({ type: "AGE_UP_ASYNC", value: 1});
}


export {watchAgeUp};