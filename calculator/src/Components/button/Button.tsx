import { FC } from "react";

interface IButtons{
    onClick : (e:any)=>void;
    className ?: string
    label : any
}
const Buttons : FC<IButtons> = (props)=>{
    const {onClick,className,label} = props
    return(
        <button type="button" onClick={onClick} className={`btn ${className}`}>
            {label}
        </button>
    )
}
export default Buttons;