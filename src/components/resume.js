import React from "react";
import resumedata from '../resume.json';
import resumepdf from '../dp2022Resume.pdf';
class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.resume = resumedata
    }
    render() {
        var pdflink = '' + {resumepdf} + '#view=FitH'
        return (
            <div className="AppSection" >
                <div className="SectionBody">
                    <div id="ResumeDiv">
                        <object id="ResumePDF" data={resumepdf} type="application/pdf" /></div>
                    <br/>
                    <a href={resumepdf}>link to pdf</a>
                </div>
            </div>);
    }
}
export default Resume