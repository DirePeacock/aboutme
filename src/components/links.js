import React from "react";
import pvars from '../personalvars.json';


class Links extends React.Component {
    
    render() {
        return (
            <div className="AppSection" >
                <div className="SectionBody">
                <a href="https://github.com/DirePeacock">Github</a><br/>
                <a href="https://twitter.com/DirePeacock">Twitter</a>
                </div>
            </div>);
    }
}
export default Links