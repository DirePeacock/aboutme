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
                <div className="SectionBody">Loads Resume Data</div>
            </div>);
    }
}
export default Resume