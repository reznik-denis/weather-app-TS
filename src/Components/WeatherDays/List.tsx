import s from './weatherThreeDays.module.css';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux';
import Item from './Item';
import { IList, SDay } from 'Components/interfases/Ilist.interface'

export default function List({days}: IList) {
    const state = useSelector(selectors.getWeatherDays);
    const currentDays = Number(days) + 1;
    return <div>
        <ul className={s.list}>
                {state.slice(1, currentDays).map((s: SDay) => 
                    <li key={s.dt}>
                        <Item state={s}/>
                   </li>
                )}
        </ul>
    </div>
}