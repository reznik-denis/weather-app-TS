import { useSelector} from 'react-redux';

import { selectors } from '../../redux';
import { Section } from '../Section';
import List from './List';

type Name = {
    name?: string,
}

interface Props {
    days: string;
}

export default function SectionDays({days}: Props) {
    const state: object[] = useSelector(selectors.getWeatherDays);
    const name: Name = useSelector(selectors.getDitailsWeather);
    
    return <Section title={` ${days} days weather forecast`} name={name.name}>
            {state && <List days={days}/>}
        </Section>;
};