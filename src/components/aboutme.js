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
                    a software developer, artist, and general freelance nerd. I'm located in the wild west of north Texas
                    but I'd like to relocate further north and further west. I've' been a working software engineer since 2018
                    working on UI's in C++ using OpenGL on embedded systems. I was a scrum master for a dev team, gaining some leadership
                    and agile experience. I had various opportunities to work in webapps, SQL services while working on C++ software.
                    I also love automated tests, builds and deployments for my software.
                </div></div>);
    }
}
export default AboutMe