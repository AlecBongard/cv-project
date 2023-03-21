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
        },
        {
          name: "lname",
          labelText: "Last Name",
          type: "text",
        },
        {
          name: "phone",
          labelText: "Phone Number",
          type: "tel",
        },
        {
          name: "email",
          labelText: "email",
          type: "email"
        }
        ]}></Section>
        <Section sectionID="education" sectionName="Education" fields={[
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
            name: "description",
            labelText: "Job Description",
            type: "textarea",
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
      </div>
    </div>)
  }
}

export default App;
