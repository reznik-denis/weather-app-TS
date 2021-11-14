import { useDispatch } from 'react-redux';
import s from './buttonCity.module.css';
import { currentSearch } from '../../redux/actions';

interface IProps {
    name: string;
}

export default function ButtonCity({ name }: IProps) {
    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        dispatch(currentSearch(name))
    }

    return <button className={s.button} type='submit' onClick={handleSubmit}>{name}</button>
}