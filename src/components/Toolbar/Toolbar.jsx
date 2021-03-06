import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import "./Toolbar.css"; 

export const Toolbar = ({title}) => {
    return (
        <div className="toolbar"> 
            <h1 className="toolbar__title">{title}</h1>
            <ThemeSwitch />
        </div>
    )
}