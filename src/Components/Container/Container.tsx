
import s from './container.module.css';

interface Props {
    children: React.ReactElement | null;
}

export default function Container({ children }: Props) {
    return <div className={s.container}>
        {children}
    </div>
}