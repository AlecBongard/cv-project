import react, { Component } from "react";
import "../styles/posted.css";


const PostedField = (props)=>{
    let submittedText;

    if(props.fieldText){
        submittedText = props.fieldText;
    }else{
        submittedText = "N/A";
    }

    return (
        <div className="field-posted">
            <p className="label-posted">{props.labelText}</p>
            <p className="text-posted">{submittedText}</p>
        </div>
    )
}

export default PostedField;