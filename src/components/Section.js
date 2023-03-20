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
        };

        this.generateFields = this.generateFields.bind(this);
        this.makePostComps = this.makePostComps.bind(this);
        this.getVals = this.getVals.bind(this);
        this.onPost = this.onPost.bind(this);
    }


    generateFields(vals=[]){
        const fields = this.props.fields;

        const fieldComps = fields.map((field, i)=>{
            
            return (
                <Field name={field.name} labelText={field.labelText} type={field.type} key={uniqid()} val={vals[i]}></Field>
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

    onPost(e){
        e.preventDefault();

        if(this.state.posted){
            this.setState({
                posted: false,
            })
        }else{
            this.setState({
                posted: true,
            })
        }
    }


    render(){
        let fields;
        let vals = this.getVals();
        let btnText;

        if(!this.state.posted){
            fields = this.generateFields(vals);
            btnText = "Submit Section";
        }else{
            fields = this.makePostComps(vals);
            btnText = "Edit Section";
        }

        return (
            <div className="section" id={this.props.sectionID}>
                <p className="form-title">{this.props.sectionName}</p>
                <form>
                    {fields}
                    <button type="submit" onClick={this.onPost}>{btnText}</button>
                </form>

            </div>
        )
    }
}

export default Section;