import React from "react";

class EngineVe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="AppSection">  <h3 className="SectionTitle">EngineVe</h3>
                <h5 className="SectionSubtitle">An open python library and game engine for the fifth edition of DnD rules.</h5>
                <div class="SectionBody">This is a python module that runs the gamestate of DnD mostly for simulating combat.</div>
            </div>);
    }
}
export default EngineVe