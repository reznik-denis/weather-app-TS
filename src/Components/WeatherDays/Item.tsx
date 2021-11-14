import { ItemList } from 'Components/ItemList';

import { dayConverter } from 'service'
import IItems from 'Components/interfases/ItemsDay.interface'

export default function Item({state}: IItems) {
    const { dt, weather, temp } = state;
    const dayOfWeek = dayConverter.unixDay(dt)
    return <div><h3>{dayOfWeek}</h3>
            <ItemList weather={weather} temp={temp.day}/>
        </div>
}