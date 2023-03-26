import react, { Component } from "react";
import "../styles/posted.css";

class PostedField extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let submittedText;

        if(this.props.fieldText){
            submittedText = this.props.fieldText;
        }else{
            submittedText = "N/A";
        }

        return (
            <div className="field-posted">
                <p className="label-posted">{this.props.labelText}</p>
                <p className="text-posted">{submittedText}</p>
            </div>
        )
    }
}

export default PostedField;