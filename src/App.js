import react, {Component} from "react";
import Section from "./components/Section";

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (<div>
      <Section sectionName="General Info" fields={[{
        name: "fname",
        labelText: "First Name",
        type: "text",
      },
      {
        name: "lname",
        labelText: "Last Name",
        type: "text",
      },
      ]}></Section>
    </div>)
  }
}

export default App;
