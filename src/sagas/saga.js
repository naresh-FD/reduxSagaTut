import delay from 'redux-saga';
import { takeEvery , put } from "redux-saga/effects" ;



function* ageUpAsync(){
  yield delay(4000);
yield put({type: "AGEUP_ASYNC" , value : 1})
}


const function* watchUp(){
  yield takeEvery(AGE_UP ,ageUpAsync);
}

 