type Temp = {
    day: number,
}

export type SDay = {
    dt: number,
    weather: [],
    temp: Temp,
}

export type SHour = {
    dt: number,
    weather: [],
    temp: number,
}

export interface IList {
    days: string;
}