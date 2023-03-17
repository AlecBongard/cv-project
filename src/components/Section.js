import react, { Component } from "react";
import Field from "./Field"
import PostedField from "./PostedField";
import uniqid from "uniqid";

class Section extends Component {
    constructor(props){
        super(props)

        this.state = {
            posted: false,
        };

        this.generateFields = this.generateFields.bind(this);
        this.makePostComps = this.makePostComps.bind(this);
        this.getVals = this.getVals.bind(this);
        this.checkPosted = this.checkPosted.bind(this);
    }


    generateFields(){
        const fields = this.props.fields;

        const fieldComps = fields.map(field=>{
            return (
                <Field name={field.name} labelText={field.labelText} type={field.type} key={uniqid()}></Field>
            )
        })

        return fieldComps;
    }

    makePostComps(vals){
        const fields = this.props.fields;

        const postComps = fields.map((field, i)=>{
           return <PostedField labelText={field.labelText} key={uniqid()}>{vals[i]}</PostedField>
        })

        this.setState({
            posted: true,
        })

        return postComps;
    }

    getVals(e){
        e.preventDefault();
        const valNodes = document.querySelectorAll(`#${this.props.sectionID} > form > .input-wrap > input`);
        const vals = Array.from(valNodes).map((node, i)=>{
            const val = node.value;


            return val;
        });

        console.log(vals);
    }

    checkPosted(){
        const vals = this.getVals();

        if(this.state.posted){
            this.setState({
                fields: this.makePostComps(vals),
            })
        }else{
            this.setState({
                fields: this.generateFields(vals),
            })
        }
    }


    render(){
        const fields = this.generateFields();

        return (
            <div className="section" id={this.props.sectionID}>
                <p className="form-title">{this.props.sectionName}</p>
                <form>
                    {fields}
                    <button type="submit" onClick={this.getVals}>Submit Section</button>
                </form>

            </div>
        )
    }
}

export default Section;