import react, { Component } from "react";
import "../styles/field.css";

const Field = (props)=>{
    function makeField(){
        if(props.type==="textarea"){
            return <textarea name={props.name}></textarea>
        }else{
            if(props.isRequired){
                return <input type={props.type}
                name={props.name} 
                defaultValue={props.val}
                onClick={props.onClick}
                onChange={props.onChange}
                placeholder={props.placeholder}
                required/>
            }else{
                return <input type={props.type}
                name={props.name} 
                defaultValue={props.val}
                onClick={props.onClick}
                onChange={props.onChange}
                placeholder={props.placeholder}
                />
            }
            
        }
    }

    let labelClass;

    if(props.isRequired){
        labelClass = "field-label label-required";
    }else{
        labelClass = "field-label"
    }

    return(
        <div className="input-wrap">
            <label htmlFor={props.name} className={labelClass}>{props.labelText}</label>
            {makeField()}
        </div>
    )
}

export default Field;