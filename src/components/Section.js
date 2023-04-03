import react, { Component, useState } from "react";
import Field from "./Field"
import PostedField from "./PostedField";
import uniqid from "uniqid";
import "../styles/section.css";

const Section = (props)=>{
    const [posted, setPosted] = useState(false);
    const [isValid, setisValid] = useState(Array(props.fields).map(field=>{
        if(field.type !== "textarea"){
            return null
        }
    }));
    const [error, setError] = useState(false);

    function generateFields(vals=[]){
        const fields = props.fields;

        const fieldComps = fields.map((field, i)=>{
            
            return (
                <Field name={field.name} 
                labelText={field.labelText} 
                type={field.type} key={uniqid()} 
                val={vals[i]} 
                onChange={checkFormValid}
                onClick={checkFormValid}
                isRequired={field.isRequired}
                placeholder={field.placeholder}>
                </Field>
            )
        })

        return fieldComps;
    }

    function makePostComps(vals){
        const fields = props.fields;

        const postComps = fields.map((field, i)=>{
           return <PostedField labelText={field.labelText} key={uniqid()} fieldText={vals[i]}></PostedField>
        })

        return postComps;
    }

    function getVals(){
        let valNodes;
        let vals;

        if(posted){
            valNodes = document.querySelectorAll(`#${props.sectionID} > form > .input-wrap > input`);

            vals = Array.from(valNodes).map((node, i)=>{
                const val = node.value;
    
    
                return val;
            });
        }else{
            valNodes = document.querySelectorAll(`#${props.sectionID} > form > .field-posted > .text-posted`);
            
            vals = Array.from(valNodes).map((node, i)=>{
                const val = node.textContent;
    
    
                return val;
            });
        }

        return vals;
    }

    function checkFormValid(){
        const fieldNodes = document.querySelectorAll(`#${props.sectionID} > form > .input-wrap > input`);
        const fieldArr = Array.from(fieldNodes);
        const validities = [...isValid];

        fieldArr.forEach((field, i)=>{

            if(field.type === "text"){
                if(!field.value){
                    validities.splice(i, 1, false);

                    fieldNodes[i].classList.add("field-invalid");
                    fieldNodes[i].classList.remove("field-valid");
                }else{
                    validities.splice(i, 1, true);

                    fieldNodes[i].classList.add("field-valid");
                    fieldNodes[i].classList.remove("field-invalid");
                }
            }else if(field.type === "email"){
                if(fieldNodes[i].checkValidity()){
                    validities.splice(i, 1, true);
                    fieldNodes[i].classList.add("field-valid");
                    fieldNodes[i].classList.remove("field-invalid");
                }else{
                    validities.splice(i, 1, false);
                    fieldNodes[i].classList.add("field-invalid");
                    fieldNodes[i].classList.remove("field-valid");
                }
            }else if(field.type === "tel"){
                if(!field.value || field.value.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) === null){
                    validities.splice(i, 1, false);
                    fieldNodes[i].classList.add("field-invalid");
                    fieldNodes[i].classList.remove("field-valid");
                }else{
                    validities.splice(i, 1, true);
                    fieldNodes[i].classList.add("field-valid");
                    fieldNodes[i].classList.remove("field-invalid");
                }
            }else if(field.type === "date"){
                const now = new Date();
                const inputDate = field.valueAsDate;

                if(field.hasAttribute("required")){
                    if(!field.value || inputDate > now){
                        validities.splice(i, 1, false);
                        fieldNodes[i].classList.add("field-invalid");
                        fieldNodes[i].classList.remove("field-valid");
                    }else{
                        validities.splice(i, 1, true);
                        fieldNodes[i].classList.add("field-valid");
                        fieldNodes[i].classList.remove("field-invalid");
                    }
                }else{
                    validities.splice(i, 1, true);
                }
            }
        })

        return validities;
    }

    function onPost(e){
        e.preventDefault();

        if(posted){
            setPosted(false);
        }else{
            const validities = checkFormValid();

            if(validities.every(val=>val)){
                setPosted(true);
                setisValid([...validities]);
                setError(false);
            }else{
                setError(true);
            }
        }
    }


        let fields;
        let vals = getVals();
        let btnText;
        let errorText;
        let btnClass;


        if(!posted){
            fields = generateFields(vals);
            btnText = "Submit Section";
            btnClass = `form-btn submit-btn`;
        }else{
            fields = makePostComps(vals);
            btnText = "Edit Section";
            btnClass = `form-btn edit-btn`;
        }

        if(error){
            errorText = "Please enter all data in the proper format."
        }else{
            errorText = "";
        }

        return (
            <div className="section" id={props.sectionID}>
                <p className="form-title">{props.sectionName}</p>
                <p className="required-legend">*required</p>
                <form className="section-form">
                    {fields}
                    <p className="error-text">{errorText}</p>
                    <button type="submit" onClick={onPost} className={btnClass}>{btnText}</button>
                </form>
            </div>
        )
}


export default Section;