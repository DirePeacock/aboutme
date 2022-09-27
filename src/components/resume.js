import React from "react";
import resumedata from '../resume.json';
class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.resume = resumedata
    }
    render() {
        return (
            <div className="AppSection" >
                <h3 className="SectionTitle">Hire Me</h3>
                <h5 className="SectionSubtitle">I'm looking for work.</h5>
                <div className="SectionBody">Loads Resume Data</div>
            </div>);
    }
}
export default Resume