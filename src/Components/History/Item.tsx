import { timeConverter } from 'service';
import { ItemList } from 'Components/ItemList';
import { IHistory } from 'Components/interfases/ICurrentWeather.interface'

export default function Item({state}: IHistory) {
    const { name, sys, weather, main } = state;
    return <div><h3>{name}</h3>
        {sys.sunrise && <p>Sunrise time - {timeConverter(sys.sunrise)}</p>}
        {sys.sunset && <p>Sunset time - {timeConverter(sys.sunset)}</p>}
        <ItemList weather={weather} temp={main.temp}/>
     </div>
};