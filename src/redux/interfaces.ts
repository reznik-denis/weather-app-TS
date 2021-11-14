export interface IDailsState {
    wind: {
        speed: number,
        gust: number,
    };
    dt: number;
    name: string;
    sys: {
        sunrise: number,
        sunset: number,
    };
    weather: [{
        description: string,
        main: string,
        icon: string,
    },];
    main: {
        temp: number,
        feels_like: number,
        humidity: number,
        pressure: number,
        temp_min: number,
        temp_max: number,
        grnd_level: number,
    };
}

export interface IHistoryState {
    name: string;
    sys: {
        sunrise: number,
        sunset: number,
    };
    weather: [{
        description: string,
        main: string,
        icon: string,
    },];
    main: {
        temp: number,
    };
}

export interface IDaysState {
    dt: number;
    name: string;
    weather: [{
        description: string,
        main: string,
        icon: string,
    },];
    temp: number;
}