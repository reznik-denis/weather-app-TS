type Temp = {
    day: number,
}

type State = {
    dt: number,
    weather: [],
    temp: Temp,
}

export default interface IItems {
    state: State;
}
