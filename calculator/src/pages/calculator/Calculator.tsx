import { FC, useState } from "react";
import Buttons from "../../Components/button/Button";
import "./Calculator.css"


const Calculator : FC = ()=>{

    const [result,setResult] = useState<number>(0);
    const [value1,setValue1] = useState<number>(0);
    const [value2,setValue2] = useState<number>(0);
    const [operation,setOperation] = useState<any>("+")
    console.log(  )
    return (
        <div className="container main">
            <div className="row content">
                <div className="result">
                    <h1 className="shown-result">{value1} {operation} {value2} = </h1>
                    <h1 className="shown-result"> {result}  </h1>
                </div>
                <div className="operations">
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"AC"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"Clear"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"%"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"/"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={(e:any)=>setValue1(e.target.value) } label={"7"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"8"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"9"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"*"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"4"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"5"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"6"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"-"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"1"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"2"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"3"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"+"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"0"} className="btn-success w-75"/>
                </div>
                <div className="col-3">
                    <Buttons onClick={()=>{} } label={"."} className="btn-success w-75"/>
                </div>
                <div className="col-6">
                    <Buttons onClick={()=>{} } label={"="} className="btn-success w-100"/>
                </div>
                </div>
               
            </div>
        </div>
    )
}
export default Calculator;