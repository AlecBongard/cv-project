import react, { Component } from "react";
import Field from "./Field"
import PostedField from "./PostedField";
import uniqid from "uniqid";
import "../styles/section.css";

class Section extends Component {
    constructor(props){
        super(props)

        this.state = {
            posted: false,
            isValid: Array(this.props.fields.length).fill(null),
            error: false,
        };

        this.generateFields = this.generateFields.bind(this);
        this.makePostComps = this.makePostComps.bind(this);
        this.getVals = this.getVals.bind(this);
        this.onPost = this.onPost.bind(this);
        this.checkFormValid = this.checkFormValid.bind(this);
    }


    generateFields(vals=[]){
        const fields = this.props.fields;

        const fieldComps = fields.map((field, i)=>{
            
            return (
                <Field name={field.name} 
                labelText={field.labelText} 
                type={field.type} key={uniqid()} 
                val={vals[i]} 
                onChange={this.checkFormValid}
                onClick={this.checkFormValid}
                isRequired={field.isRequired}
                placeholder={field.placeholder}>
                </Field>
            )
        })

        return fieldComps;
    }

    makePostComps(vals){
        const fields = this.props.fields;

        const postComps = fields.map((field, i)=>{
           return <PostedField labelText={field.labelText} key={uniqid()} fieldText={vals[i]}></PostedField>
        })

        return postComps;
    }

    getVals(){
        let valNodes;
        let vals;

        if(this.state.posted){
            valNodes = document.querySelectorAll(`#${this.props.sectionID} > form > .input-wrap > input`);

            vals = Array.from(valNodes).map((node, i)=>{
                const val = node.value;
    
    
                return val;
            });
        }else{
            valNodes = document.querySelectorAll(`#${this.props.sectionID} > form > .field-posted > .text-posted`);
            
            vals = Array.from(valNodes).map((node, i)=>{
                const val = node.textContent;
    
    
                return val;
            });
        }

        return vals;
    }


    checkFormValid(){
        const fieldNodes = document.querySelectorAll(`#${this.props.sectionID} > form > .input-wrap > input`);
        const fieldArr = Array.from(fieldNodes);
        const validities = [...this.state.isValid];

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

    onPost(e){
        e.preventDefault();

        if(this.state.posted){
            this.setState({
                posted: false,
            })
        }else{
            const validities = this.checkFormValid();

            if(validities.every(val=>val)){
                this.setState({                   
                    posted: true,
                    isValid: [...validities],
                    error: false,
                })
            }else{
                this.setState({
                    error: true,
                })
            }
        }
    }


    render(){

        let fields;
        let vals = this.getVals();
        let btnText;
        let errorText;
        let btnClass;


        if(!this.state.posted){
            fields = this.generateFields(vals);
            btnText = "Submit Section";
            btnClass = `form-btn submit-btn`;
        }else{
            fields = this.makePostComps(vals);
            btnText = "Edit Section";
            btnClass = `form-btn edit-btn`;
        }

        if(this.state.error){
            errorText = "Please enter all data in the proper format."
        }else{
            errorText = "";
        }

        return (
            <div className="section" id={this.props.sectionID}>
                <p className="form-title">{this.props.sectionName}</p>
                <p className="required-legend">*required</p>
                <form className="section-form">
                    {fields}
                    <p className="error-text">{errorText}</p>
                    <button type="submit" onClick={this.onPost} className={btnClass}>{btnText}</button>
                </form>
            </div>
        )
    }
}

export default Section;