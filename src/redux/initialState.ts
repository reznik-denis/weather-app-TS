import { IDailsState, IHistoryState, IDaysState } from './interfaces';

export const initialDailsState: IDailsState = {
    wind: {
        speed: 0,
        gust: 0,
    },
    dt: 0,
    name: 'Undefined city',
    sys: {
        sunrise: 0,
        sunset: 0,
    },
    weather: [{
        description: '',
        main: '',
        icon: '',
    },],
    main: {
        temp: 0,
        feels_like: 0,
        humidity: 0,
        pressure: 0,
        temp_min: 0,
        temp_max: 0,
        grnd_level: 0,
    }
};

export const initialHistoryState: IHistoryState = {
    name: '',
    sys: {
        sunrise: 0,
        sunset: 0,
    },
    weather: [{
        description: '',
        main: '',
        icon: '',
    },],
    main: {
        temp: 0,
    },
};

export const initialDaysState: IDaysState = {
    dt: 0,
    name: 'string',
    weather: [{
        description: '',
        main: '',
        icon: '',
    },],
    temp: 0,
}