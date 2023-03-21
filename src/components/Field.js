import react, { Component } from "react";
import "../styles/field.css";

class Field extends Component {
    constructor(props){
        super(props);

        this.makeField = this.makeField.bind(this);
    }

    makeField(){
        if(this.props.type==="textarea"){
            return <textarea name={this.props.name}></textarea>
        }else{
            return <input type={this.props.type}
             name={this.props.name} 
             defaultValue={this.props.val} 
             onChange={this.props.onChange}
             required/>
        }
    }

    render(){
        return(
            <div className="input-wrap">
                <label htmlFor={this.props.name} className="field-label">{this.props.labelText}</label>
                {this.makeField()}
            </div>
        )
    }
}

export default Field;