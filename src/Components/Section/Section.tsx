import { JsxElement } from 'typescript';
import s from './Section.module.css';

interface Props {
    children: JsxElement | unknown;
    title: string;
    name?: string;
}

export default function Section({ children, title, name}: Props) {
    return <div>
        <h2 className={s.title}>{title}</h2>
        <h3 className={s.capitalize}>{name}</h3>
        {children}
    </div>
};