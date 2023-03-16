import react, { Component } from "react";
import Field from "./Field"

class Section extends Component {
    constructor(props){
        super(props)

        this.generateFields = this.generateFields.bind(this);
    }

    generateFields(){
        const fields = this.props.fields;

        const fieldComps = fields.map(field=>{
            return (
                <Field name={field.name} labelText={field.labelText} type={field.type}></Field>
            )
        })

        return fieldComps;
    }

    render(){
        const fields = this.generateFields();

        return (
            <div className="section">
                <p className="form-title">{this.props.sectionName}</p>
                <form>
                    {fields}
                    <button type="submit">Submit Section</button>
                </form>

            </div>
        )
    }
}

export default Section;