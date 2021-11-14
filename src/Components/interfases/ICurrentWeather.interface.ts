export interface S {
    date: number;
    name: string;
    sys: Sunset;
    weather: [];
    main: Temp;
}

type Sunset = {
    sunrise: number,
    sunset: number,
}

type Temp = {
    temp: number,
    feels_like: number,
    humidity: number,
    pressure: number,
    temp_min: number,
    temp_max: number,
    grnd_level: number,
}

type Wind = {
    speed: number,
    gust: number,
}

export interface IHistory {
    state: S;
}

export interface ICurrentOne extends S {
    wind: Wind;
}