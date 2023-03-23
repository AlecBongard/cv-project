import react, { Component } from "react";
import "../styles/posted.css";

class PostedField extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="field-posted">
                <p className="label-posted">{this.props.labelText}</p>
                <p className="text-posted">{this.props.fieldText}</p>
            </div>
        )
    }
}

export default PostedField;