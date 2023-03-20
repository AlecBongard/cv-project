import react, { Component } from "react";
import "../styles/field.css";

class Field extends Component {
    constructor(props){
        super(props);
    }

    makeField(){
        if(this.props.type==="textarea"){
            return <textarea name={this.props.name}></textarea>
        }else{
            return <input type={this.props.type} name={this.props.name} defaultValue={this.props.val}/>
        }
    }

    render(){
        return(
            <div className="input-wrap">
                <label htmlFor={this.props.name}>{this.props.labelText}</label>
                {this.makeField()}
            </div>
        )
    }
}

export default Field;