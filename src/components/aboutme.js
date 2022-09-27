import React from "react";

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="AppSection">
                <h3 className="SectionTitle">AboutMe</h3>
                <h5 className="SectionSubtitle">direpeacock --info</h5>
                <div class="SectionBody">
                    Hey, I'm {this.props.data['firstname']} {this.props.data['lastname']},
                    a software developer, artist, and general freelance nerd. I'm located in the wild west of North Texas
                    but I'd like to relocate further North and further West.
                </div></div>);
    }
}
export default AboutMe