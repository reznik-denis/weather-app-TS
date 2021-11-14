import { selectors } from '../../redux';
import { Section } from '../Section';
import List from './List';
import {useAppSelector} from 'redux/hooks'

type Name = {
    name?: string,
}

interface Props {
    days: string;
}

export default function SectionDays({days}: Props) {
    const state: object[] = useAppSelector(selectors.getWeatherDays);
    const name: Name = useAppSelector(selectors.getDitailsWeather);
    
    return <Section title={` ${days} days weather forecast`} name={name.name}>
            {state && <List days={days}/>}
        </Section>;
};