import react, { Component } from "react";

class Field extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="input-wrap">
                <label htmlFor={this.props.name}>{this.props.labelText}</label>
                <input type={this.props.type} name={this.props.name} defaultValue={this.props.val}/>
            </div>
        )
    }
}

export default Field;