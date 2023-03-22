import react, {Component} from "react";
import Section from "./components/Section";
import "./styles/app.css";

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (<div className="app-wrap">
      <p className="app-title">Resume</p>
      <div className="section-wrap">
        <Section sectionID="general" sectionName="General Info" fields={[{
          name: "fname",
          labelText: "First Name",
          type: "text",
          isRequired: true,
        },
        {
          name: "lname",
          labelText: "Last Name",
          type: "text",
          isRequired: true,
        },
        {
          name: "phone",
          labelText: "Phone Number",
          type: "tel",
          isRequired: true,
          placeholder: "123-456-7890"
        },
        {
          name: "email",
          labelText: "email",
          type: "email",
          isRequired: true,
        }
        ]}></Section>
        <Section sectionID="education" sectionName="Education" fields={[
          {
            name: "school",
            labelText: "School Name",
            type: "text",
            isRequired: true,
          },
          {
            name: "major",
            labelText: "Major",
            type: "text",
            isRequired: true,
          },
          {
            name: "degree-type",
            labelText: "Type of Degree",
            type: "text",
            isRequired: true,
          },
          {
            name: "grad-date",
            labelText: "Date of graduation",
            type: "date",
            isRequired: false,
          }
        ]}></Section>
        <Section sectionID="experience" sectionName="Work Experience" fields={[
          {
            name: "company",
            labelText: "Company Name",
            type: "text",
            isRequired: true,
          },
          {
            name: "job-title",
            labelText: "Job Title",
            type: "text",
            isRequired: true,
          },
          {
            name: "description",
            labelText: "Job Description",
            type: "textarea",
            isRequired: true,
          },
          {
            name: "start",
            labelText: "Start Date",
            type: "date",
            isRequired: true,
          },
          {
            name: "end",
            labelText: "End Date",
            type: "date",
            isRequired: false,
          }
        ]}></Section>
      </div>
    </div>)
  }
}

export default App;
