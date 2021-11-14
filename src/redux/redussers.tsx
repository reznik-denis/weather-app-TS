import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {currentSearch} from './actions';
import { fetchSearch, fetchSearchSevenDays } from './operations';
import {initialDailsState, initialHistoryState, initialDaysState} from './initialState'
import { IDailsState, IHistoryState, IDaysState } from './interfaces';

let firstRender = true;

interface IName {
    payload: string;
};

interface IHistory {
    payload: IHistoryState;
};

interface IDails {
    payload: IDailsState;
}

interface IDays {
    payload: IDaysState;
}

interface IError {
    payload: string | null;
}

const cityReducer = createReducer('minsk', {
    [currentSearch]: (state: string, action: IName) => {
        return action.payload ? action.payload : state;
    },
})

const historyReducer = createReducer(initialHistoryState, {
    [fetchSearch.fulfilled]: (state: IHistory[], action: IHistory) => {
        if (firstRender) {
            firstRender = false;
            return state
        }
        const dateNow: number = new Date().getTime();
        return [{ ...action.payload, date: dateNow }, ...state].sort((a,b) => b.date - a.date)
    }
})

const ditailsWeatherReduccer = createReducer(initialDailsState, {
    [fetchSearch.fulfilled]: (state: IDails, action: IDails) => action.payload
});

const weatherDaysReduccer = createReducer(initialDaysState, {
    [fetchSearchSevenDays.fulfilled]: (state: IDays, action: IDays) => action.payload
})

const loading = createReducer(false, {
    [fetchSearch.pending]: () => true,
    [fetchSearch.fulfilled]: () => false,
    [fetchSearch.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchSearch.rejected]: (state: IError, action:IError) => action.payload,
    [fetchSearch.pending]: () => null,
    [fetchSearchSevenDays.rejected]: (state: IError, action: IError) => action.payload,
    [fetchSearchSevenDays.pending]: () => null,
});


export default combineReducers({
    current: cityReducer,
    ditailsWeather: ditailsWeatherReduccer,
    history: historyReducer,
    weatherSevenDay: weatherDaysReduccer,
    loading,
    error,
})