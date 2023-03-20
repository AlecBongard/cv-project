import react, {Component} from "react";
import Section from "./components/Section";

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (<div>
      <Section sectionID="general" sectionName="General Info" fields={[{
        name: "fname",
        labelText: "First Name",
        type: "text",
      },
      {
        name: "lname",
        labelText: "Last Name",
        type: "text",
      },
      {
        name: "phone",
        labelText: "Phone Number",
        type: "tel"
      },
      {
        name: "email",
        labelText: "email",
        type: "email"
      }
      ]}></Section>
      <Section sectionID="education" sectionName="Eductaion" fields={[
        {
          name: "school",
          labelText: "School Name",
          type: "text"
        },
        {
          name: "major",
          labelText: "Major",
          type: "text"
        },
        {
          name: "degree-type",
          labelText: "Type of Degree",
          type: "text",
        },
        {
          name: "grad-date",
          labelText: "Date of graduation",
          type: "date",
        }
      ]}></Section>
      <Section sectionID="experience" sectionName="Work Experience" fields={[
        {
          name: "company",
          labelText: "Company Name",
          type: "text",
        },
        {
          name: "job-title",
          labelText: "Job Title",
          type: "text"
        },
        {
          name: "start",
          labelText: "Start Date",
          type: "date",
        },
        {
          name: "end",
          labelText: "End Date",
          type: "date",
        }
      ]}></Section>
    </div>)
  }
}

export default App;
