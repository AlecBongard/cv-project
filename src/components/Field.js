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
            if(this.props.isRequired){
                console.log("a");
                return <input type={this.props.type}
                name={this.props.name} 
                defaultValue={this.props.val}
                onClick={this.props.onClick}
                onChange={this.props.onChange}
                required/>
            }else{
                return <input type={this.props.type}
                name={this.props.name} 
                defaultValue={this.props.val}
                onClick={this.props.onClick}
                onChange={this.props.onChange}
                />
            }
            
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