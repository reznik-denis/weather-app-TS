import s from './form.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { validation } from 'service';

export default function Form() {
    const [search, setSearch] = useState<string>('');
    const navigate = useNavigate();
  
    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value.toLowerCase());
    };

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (search.trim() === '') {
            toast.error("Enter city!");
            return
        } else if (validation(search)) {
            toast.error("Your city invalid!");
            reset();
            return
        } else {
            navigate(`/in/${search}`);                
        }
        reset();
    };

    function reset() {
        setSearch('');
    }

    return <form className={s.form} onSubmit={onSubmitHandler}>
        <label className={s.lableForm} htmlFor="city">Change your city</label>
        <div className={s.flex}>
            <input
            className={s.inputLable}
            type="text"
            id="city"
            value={search}
            onChange={handleOnChangeInput}
            autoComplete="off"/>
        <button className={s.button} type='submit'>Search</button>
        </div>
    </form>
}